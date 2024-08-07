<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\DashboardController;
/*

|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/dashboard');

Route::middleware(['auth','verified'])->group(function(){
    Route::get('/dashboard',fn()=>Inertia::render('Dashboard'))->name('dashboard');
    // Route::resource('project',ProjectController::class);
    // Route::resource('task',TaskController::class);
    Route::resource('user',UserController::class);
    Route::resource('invoice',InvoiceController::class);

    Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');
    
    // Route::delete('/invoice-doucment-destroy/{id}/{invid}', [InvoiceController::class,'deleteinvocedoc']);


});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

 

require __DIR__.'/auth.php';
