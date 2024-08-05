<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void 
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            
            
            $table->string('invoice_type');
            $table->foreignId('created_by')->constrained('users');
            $table->string('invoice_financial_year');
            $table->string('bill_to');
            $table->string('bill_from');            
            $table->timestamp('invoice_date')->nullable();
            $table->string('invoice_number');
            $table->string('reference_number');
            $table->double('invoice_amount');
                           
            $table->string('bill_type');
            $table->string('tax');
            $table->string('tax_amount');
          
            $table->string('invoice_image');
            $table->text('remarks');             
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
