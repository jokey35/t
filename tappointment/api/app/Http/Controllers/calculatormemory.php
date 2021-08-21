<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Test\Constraint\ResponseIsSuccessful;

class calculatormemory extends Controller
{
    function getmemory(){
        try{
            $value = Storage::disk('local')->get('myfile.txt');
            return response()->json($value, 200);
        }
        catch(\Exception $e){
            return response()->json($e, 500);
        }

    }

    function setmemory(Request $request)
    {
        try {
            if (is_numeric($request->number)) {
                Storage::put('myfile.txt', $request->number);
            } else
                return response()->json("Nem szám", 500);
        } catch (\Exception $e) {
            return response()->json($e, 500);

        }
    }
}
