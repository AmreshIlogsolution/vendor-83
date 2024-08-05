<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

     public static $wrap=false;

    public function toArray(Request $request): array
    {
       
        $aa =  [
            'id' => $this->id,
            'invoice_type' => $this->invoice_type,    
           // 'user_id' => $this->user_id,            
            'invoice_financial_year'=>$this->invoice_financial_year,
            'bill_to' => $this->bill_to,
            'bill_from' => $this->bill_from,
            'invoice_date' => (new Carbon($this->invoice_date))->format('Y-m-d'),
            'invoice_number' => $this->invoice_number,
            'reference_number' => $this->reference_number,
            'invoice_amount' => $this->invoice_amount,
            'bill_type' => $this->bill_type,
            'tax' => $this->tax,
            'tax_amount' => $this->tax_amount,
            'invoice_image' =>$this->invoice_image,
            // 'invoice_image' => $this->image_path && !(str_starts_with($this->image_path, 'http')) ?
            //  Storage::url($this->image_path) : $this->image_path,
            'upload_document' =>'',
            'remarks' => $this->remarks,
            'createdBy' => new UserResource($this->createdBy),
            // 'invoiceDetails' => new invoiceDetailResource(311),
            
             
        ];
 
        return $aa;
    }
}