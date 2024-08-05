<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\InvoiceType;
use App\Models\User;
class Invoice extends Model
{
    use HasFactory;

    // protected $guarded = ['*'];
    protected $fillable = [
    'invoice_type', 
    'created_by', 
    'invoice_financial_year', 
    'bill_to',
    'bill_from',
    'invoice_date', 
    'invoice_number', 
    'reference_number',
    'invoice_amount', 
    'bill_type',
    'tax', 
    'tax_amount',
    'total_tax_amount',
    'invoice_image',         
    'remarks',
    'updated_by'
    ];

    // public function invoiceTypes(){
    //     return $this->hasMany(InvoiceType::class);
    // }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function invoiceDetail()
    {
        return $this->hasMany(InvoiceDetail::class,'invoice_id');
    }
    
}
