<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Project;
use Illuminate\Database\Seeder;
use App\Models\InvoiceType;
use App\Models\Invoice;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Ramesh',
            'email' => 'ramesh@example.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time()
        ]);

         Project::factory()->count(30)->hasTasks(30)->create();

        //Invoice::factory()->count(300)->create();

        \App\Models\Invoice::factory(300)->create();

        //  \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Storage'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Transportation – Market Vehicle'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Transportation – Dedicated Vehicle'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Transportation – Part Load'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Admin – Utilities'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Admin – Stationary'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Admin – Service'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Technology – Service'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Technology – Hardware'             
        // ]);
        // \App\Models\InvoiceType::factory()->create([
        //     'invoice_type' => 'Technology – Software'             
        // ]);


        
    }
}
