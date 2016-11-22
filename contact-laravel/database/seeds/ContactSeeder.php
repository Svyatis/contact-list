<?php

use Illuminate\Database\Seeder;
use App\Entities\Contact;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        foreach (range(1, 30) as $index) {
            Contact::create([
                'name' => $faker->firstName,
                'surname' => $faker->lastName,
                'phone' => $faker->phoneNumber,
                'info' => $faker->text(250),
                'birthday' => $faker->dateTimeBetween('-30 years', '-25 years')
            ]);
        }
    }
}
