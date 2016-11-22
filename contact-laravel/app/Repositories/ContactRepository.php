<?php

namespace App\Repositories;

use App\Entities\Contact;

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
}
