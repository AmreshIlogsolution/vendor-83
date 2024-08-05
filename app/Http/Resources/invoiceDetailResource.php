<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class invoiceDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

     

  
    public function toArray(Request $request): array
    {
        
        return [
            'id' => $this->invoice_id,
            'invoice_image' => $this->invoice_image,
        ];

    }
}
    