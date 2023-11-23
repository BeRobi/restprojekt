<?php

use App\Http\Controllers\WritersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/writers', [WritersController::class, 'index']);
Route::post('/writers', [WritersController::class, 'store']);
Route::delete('/writers/{id}',[WritersController::class, 'destroy']);
Route::put('/writers/{id}', [WritersController::class, 'update']);