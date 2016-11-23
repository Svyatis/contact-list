<?php

namespace App\Repositories;

use App\Entities\Contact;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ContactRepository
{
    /**
     * @var $model
     */
    private $model;

    /**
     * PostRepository constructor.
     * @param Contact $contact
     */
    public function __construct(Contact $contact)
    {
        $this->model = $contact;
    }

    /**
     * @return mixed
     */
    public function getAll()
    {
        return $this->model->all();
    }

    public function addContact($request)
    {
        $createdAt = Carbon::parse($request->get('bday'));
        $date = $createdAt->format('Y-m-d');

        $contact = [
            'name' => $request->get('name'),
            'surname' => $request->get('surname'),
            'phone' => $request->get('phone'),
            'info' => $request->get('info'),
            'birthday' => $date
        ];
        $this->model->create($contact);
    }
}
