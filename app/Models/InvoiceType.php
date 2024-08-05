<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceType extends Model
{
    use HasFactory;
    protected $table = "invoice_types";
    protected $fillable = [
        'invoice_type'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
         
    ];

}
