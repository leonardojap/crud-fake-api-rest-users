# crud-fake-api-rest-users
Es un api rest node-express, con un crud de usuario, para probar tus proyectos localmente, sin instalar ni configurar bases de datos, crea, edita, consulta, y elimina registros.
Hecho con las mejores practicas, estructura simple y estandar. 
Sientase libre de clonar y usar este pequeño proyecto para hechar a andar su ideas.  

***********
This is an API rest Node-Express, with a CRUD's user, to test your projects locally (http test), no need to install or configure a database, you can use this project to edit, create, update, find, and delete data.
This project have been made with the bests practices, with a simple structuring.
Feel free to clone and use this lilte project to start your ideas.


Como usar / How to use it:

  1) git clone ...
  2) cd project..
  3) Abrir la consola en la ruta del proyecto, y ejecutar: "npm i" / open terminal and execute: "npm i"
  4) una ves se termina de jecutar npm i, ejecutar: "node app" / execute "node app"

Dependencias:

  NodeJs.

Servicios / Services:

  Crear ususario / Create User: 
  url: localhost:8000/api/users/create
  metod: POST
  Body:
    
    {
      name:"yourmname",
      lastName: "yourLastName",
      email: "yourEmail@something.something",
      password: "yourSuperSecretPassword"
    }
    
  editar Usuario / Update Users:

url: localhost:8000/api/users/update
  metod: POST
  Body:
    {
      email: "yourEmail@something.something", // is required as id,
      name:...
      lastNae... // set your nes values only, no need to set all data again to edit
    }
    
 buscar usuario por email / Find User by email:
 
 url: localhost:8000/api/users/:email
 metod: GET
  
 Eliminar Usuario / Delete User:
 
 url: localhost:8000/api/users/delete
 metod: DELETE
  
  
