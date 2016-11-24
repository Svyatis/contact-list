<?php

namespace App\Http\Controllers\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\ContactRepository;

class ContactController extends Controller
{
    private $contactRepo;

    public function __construct(ContactRepository $contactRepo)
    {
        $this->contactRepo = $contactRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $allContacts = $this->contactRepo->getAll();
        } catch (\Exception $e) {
            return response()->json([
                'status' => $e->getCode(),
                'error' => $e->getMessage()
            ]);
        }
        return response()->json([
            'allContacts' => $allContacts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $this->contactRepo->addContact($request);
            $contacts = $this->contactRepo->getAll();
        } catch (\Exception $e) {
            if ($e->getCode() == 23000) {
                return response()->json([
                    'status' => 407,
                    'error' => 'This phone number already exists in your contacts please provide different number'
                ]);
            } else {
                return response()->json([
                    'status' => $e->getCode(),
                    'error' => $e->getMessage()
                ]);
            }
        }

        return response()->json([
            'status' => 200,
            'contacts' => $contacts
        ]);
    }

    /**
     * Display the specified resource.
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $contactDetail = $this->contactRepo->contactDetail($id);
        } catch (\Exception $e) {
            return response()->json([
                'status' => $e->getCode(),
                'error' => $e->getMessage()
            ]);
        }
        return response()->json([
            'contactDetail' => $contactDetail
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $this->contactRepo->updateContact($request, $id);
        } catch (\Exception $e) {
            return response()->json([
                'status' => $e->getCode(),
                'error' => $e->getMessage()
            ]);
        }

        return response()->json([
            'status' => 200
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
