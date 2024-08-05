<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
 */
class InvoiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'invoice_type' => \fake()->randomElement(['Transportation – Market Vehicle','Transportation – Dedicated Vehicle
','Transportation – Part Load','Admin – Utilities','Admin – Stationary','Admin – Service','Technology – Service','Technology – Hardware
','Technology – Software']),
            'user_id' =>1,
            'invoice_financial_year' => '2024-2025',
            'bill_to' =>'AWL',
            'bill_from' =>'ilogsolutions',
            'invoice_date' => \fake()-> dateTimeBetween('now','+1 year'),
            'invoice_number' => \fake()->randomNumber(),
            'reference_number' => \fake()->randomNumber(),
            'invoice_amount' => \fake()->randomFloat(2,1,1000),     
            'bill_type' => \fake()->randomElement(['GST','IGST']),
            'tax' => \fake()->randomElement(['5','12','18','28']),
            'tax_amount' => \fake()->randomFloat(2,1,100),                   
            'invoice_image' => \fake()->imageUrl(),
            'remarks' => \fake()->sentence(),
        ];
    }
}
