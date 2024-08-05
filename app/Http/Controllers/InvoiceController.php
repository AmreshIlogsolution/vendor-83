<?php

namespace App\Http\Controllers;
use DB;  
use App\Models\Invoice;
use App\Models\InvoiceType;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\InvoiceDetail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\Http\Resources\InvoiceResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
    */

    public function index()
    {       
        $query = Invoice::query();         
        $sortField = \request("sort_field" , "created_at");       
        $sortDirection = \request("sort_direction","desc"); 
        if (request("name")) {
            $query->where("invoice_type", "like", "%" . request("name") . "%");
        }

        $invoices = $query->where('created_by','=', Auth::id())->orderBy($sortField,$sortDirection)->paginate(15);       
        return inertia("Invoice/Index",[
             "invoices"=>InvoiceResource::collection($invoices),
             'queryParams' => request()->query() ? : null,            
             'success' => session('success')
        ]);
 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $invoiceType = InvoiceType::get();
        // bill to location
        $response = Http::get('http://192.168.146.119/PUUGLE/api/awl-location-master');
        $billto =  $response->object();
       
        $states = DB::table('states')->get();
        return inertia("Invoice/Create",['invoiceType'=>$invoiceType,'billto'=>$billto,'states'=>$states]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInvoiceRequest $request)
    {
       
        $data = $request->validated();        
        /** @var $image \Illuminate\Http\UploadedFile */
        $image = $data['invoice_image'] ?? null;            
        $data['created_by'] = Auth::id();      
        if ($image) {            
             $path = $image->store('invoice/'. Str::random(), 'public'); 
            // Generate the full URL
            $url = Storage::url($path); 
           $data['invoice_image'] = $url ;
        }
        $invoiceCreatedId =  Invoice::create($data);
        $invoiceDocuments =  $request->file('upload_document');       
        $inc=0;
        if($invoiceDocuments){ 
            foreach($invoiceDocuments as $file) {
                $inc++;               
                $path = $file->store('invoiceMoreDoc/'. $inc.Str::random(), 'public');
                $urlInvoceMore = Storage::url($path);
                $invoiceDoc = array(
                    "invoice_id" => $invoiceCreatedId->id,
                    "invoice_image" => $urlInvoceMore,
                    'created_at' =>now(),
                );            
                DB::table('invoice_details')->insert($invoiceDoc);
            }   
        }
        return to_route('invoice.index')
            ->with('success', 'Invoice was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
       $this->authorize('view', $invoice);
        
        $invoiceDetils = Invoice::with('invoiceDetail')->where('id','=',$invoice->id)->get();
        
       return inertia("Invoice/Show",[
         "invoice"=> new InvoiceResource($invoice), 
         "invoiceDetails"=> $invoiceDetils, 
         'success' => session('success')
       ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invoice $invoice)
    {
        $this->authorize('create', $invoice);
        $invoiceType = InvoiceType::get();
        $invoiceDetils = Invoice::with('invoiceDetail')->where('id','=',$invoice->id)->get();
        $response = Http::get('http://192.168.146.119/PUUGLE/api/awl-location-master');
        $billto =  $response->object();
        $states = DB::table('states')->get();
        return inertia('Invoice/Edit', [
            'invoice' => new InvoiceResource($invoice),
            'invoiceType'=>$invoiceType,
            'billto'=>$billto,
            'states'=>$states,
            "invoiceDetails"=> $invoiceDetils, 
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvoiceRequest $request, Invoice $invoice)
    {
        $data = $request->validated();
        $image = $data['invoice_image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($invoice->invoice_image) {
                
                Storage::disk('public')->deleteDirectory(dirname($invoice->invoice_image));
            }
            

            $path = $image->store('invoice/'. Str::random(), 'public'); 
            // Generate the full URL
            $url = Storage::url($path); 
            $data['invoice_image'] =$url;
        }    else{
            $data['invoice_image'] = $invoice->invoice_image;  // if no image is provided then update with old image  else no image will be added  to db.  so no need to delete image.  just update the image path in db.
        }
        
        $invoiceid = $invoice->update($data);
         
        $invoiceDocuments =  $request->file('upload_document');  
         
        $inc=0;
        if($invoiceDocuments){ 
            foreach($invoiceDocuments as $file) {
                $inc++;               
                $path = $file->store('invoiceMoreDoc/'. $inc.Str::random(), 'public');
                $urlInvoceMore = Storage::url($path);
                $invoiceDoc = array(
                    "invoice_id" => $invoice->id,
                    "invoice_image" => $urlInvoceMore,
                    'updated_at' =>now(),
                );        
                
                DB::table('invoice_details')->insert($invoiceDoc);
            }   
        }

        return to_route('invoice.index')
            ->with('success', "Ivoice \"$invoice->invoice_number\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
       if($id){
        $invoiceAndInvoiceDocIds = explode('_',$id);
        if(!empty($invoiceAndInvoiceDocIds[0] && $invoiceAndInvoiceDocIds[1])){
           
            DB::table('invoice_details')
            ->where(['invoice_id'=>$invoiceAndInvoiceDocIds[0], 'id'=>$invoiceAndInvoiceDocIds[1]])            
            ->delete();  
            return to_route('invoice.show',$invoiceAndInvoiceDocIds[0])
            ->with('success', 'Invoice document  was deleted successfully'); 
            
        }
        
       }
    } 
}
