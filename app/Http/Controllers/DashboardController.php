<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;
class DashboardController extends Controller
{
    public function index(){
        $user = auth()->user();
        $totalInvoiceCreatedByUser = Invoice::query()
       // ->where('status', 'pending')
        ->where('created_by', $user->id)
        ->count();
        return inertia(
            'Dashboard',
            compact(
                'totalInvoiceCreatedByUser',
                 
            )
        );
    }
}
