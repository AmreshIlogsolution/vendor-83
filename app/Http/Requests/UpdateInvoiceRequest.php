<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInvoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
          'invoice_type' => 'required',
            'invoice_financial_year' => 'required',
            'bill_to' => 'required',
            'bill_from' => 'required',
            'invoice_date' => 'required',
            'invoice_number' => 'required',
            'reference_number' => 'required',
            'invoice_amount' => 'required',
            'bill_type' => 'required',
            'tax' => 'required',
            'tax_amount' => 'required',    
            'invoice_image' =>'',
           
           // 'invoice_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'remarks' => ''
        ];
    }
}
