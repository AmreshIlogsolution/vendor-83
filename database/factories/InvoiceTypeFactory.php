<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InvoiceType>
 */
class InvoiceTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'invoice_type' => \fake()->randomElement(
                [
                    'Storage',
                    'Transportation Market Vehicle',
                    'Transportation Dedicated Vehicle',
                    'Transportation  Part Load',
                    'Admin  Utilities',
                    'Admin  Stationary',
                    'Admin  Service',
                    'Technology  Service',
                    'Technology  Hardware',
                    'Technology  Software',
                    ]
            ),
        ];
    }
}
