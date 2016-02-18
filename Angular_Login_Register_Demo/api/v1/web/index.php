<?php

require_once __DIR__.'/../vendor/autoload.php';
require_once 'DatabaseHelper.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();

$app->get('/hello', function () {


  $db = new DatabaseHelper();

    $user = $db->getOneRecord("SELECT * FROM test ORDER BY id DESC");

var_dump($user);

    return 'Hello!';
});

$app->post('/login', function (Request $request)  use ($app) {

    $data = json_decode($request->getContent(), true);

    $email = $data['customer']['email'];
    $password = $data['customer']['password'];

    $db = new DatabaseHelper();

    $user = $db->getOneRecord("SELECT * FROM user where email = '$email' and password ='$password'");

    if ($user != NULL)
    {
        $response['status'] = "success";
        $response['message'] = 'Logged in successfully.';
        $response['name'] = $user['name'];
        $response['id'] = $user['id'];
        $response['email'] = $user['email'];
        $response['createdAt'] = $user['created'];
    }
    else
    {
         $response['status'] = "error";
         $response['message'] = 'Login failed. Incorrect credentials';
    }

    return $app->json($response);
});

$app->post('/signup', function (Request $request)  use ($app) {

    $data = json_decode($request->getContent(), true);

    $db = new DatabaseHelper();
    $phone = $data['customer']['phone'];
    $name = $data['customer']['name'];
    $email = $data['customer']['email'];
    $address = $data['customer']['address'];
    $password = $data['customer']['password'];

    $isUserExists = $db->getOneRecord("select 1 from user where email='$email'");

    if(!$isUserExists)
    {
        $tableName = "user";
        $columnNames = array('phone', 'name', 'email', 'password', 'address');
        $result = $db->insertIntoTable($data['customer'], $columnNames, $tableName);
        if ($result != NULL)
        {
            $response["status"] = "success";
            $response["message"] = "User account created successfully";
            $response["id"] = $result;
            $response["name"] = $name;
            $response["email"] = $email;
        }
        else
        {
            $response["status"] = "error";
            $response["message"] = "Failed to create user. Please try again";
        }
    }
    else
    {
        $response["status"] = "error";
        $response["message"] = "An user with the provided email already exists!";
    }

    return $app->json($response);
});

$app->run();
