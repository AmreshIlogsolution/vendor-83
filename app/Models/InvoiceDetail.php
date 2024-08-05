<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_id',
        'invoice_image',
    ];

    public function invoice(){
        return $this->belongsTo(Invoice::class,'invoice_id','id');
    }

    public function invoiceDetails()
    {
        return $this->hasMany(Invoice::class);
    }
       
}
