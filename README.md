#  First Express.js Project

A simple User Management REST API built with Node.js and Express.js.  
This project demonstrates the foundational concepts of Express routing, controllers, and CRUD operations while integrating clean API documentation and Postman testing workflow.

---

## Project Overview

This API allows you to:
- View all users
- Fetch a single user by ID
- Create a new user
- Update an existing user
- Delete a user

It’s a simple and practical starting point for understanding RESTful API architecture in Express.js.

---

##  Project Setup

### 1️⃣ Clone the repository
git clone https://github.com/thevirtualtechmaven/first-express-project.git

### 2️⃣ Navigate to the project folder
cd first-express-project

### 3️⃣ Install dependencies
npm install

### 4️⃣ Run the server
node server.js

The server will start on: http://localhost:3000

---

##  Folder Structure

first-express-project/
├── controllers/
│   └── userController.js
├── routes/
│   └── users.js
├── utils/
│   └── utils.js
├── screenshots/
│   └── Description 
│   └── Postman test images
├── first-express-project.postman_collection.json
├── server.js
└── package.json

---

##  API Endpoints

| METHOD | ENDPOINT         | DESCRIPTION         | STATUS |
| ------ | ---------------- | ------------------- | ------ |
| GET    | `/api/users`     | Get all users       | done   |
| GET    | `/api/users/:id` | Get a user by ID    | done   |
| POST   | `/api/users`     | Create a new user   | done   |
| PUT    | `/api/users/:id` | Update a user by ID | done   |
| DELETE | `/api/users/:id` | Delete a user by ID | done   |

---

##  Postman Collection

Import the Postman collection file to test all API routes:
https://github.com/VirtualTechMaven/first-expressjs-project/blob/main/Express%20Users%20API.postman_collection.json
It includes all CRUD routes with example request bodies and headers.

---

##  API Testing Screenshots

Below are sample screenshots from Postman tests

### 1️⃣ Create a New User
https://github.com/VirtualTechMaven/first-expressjs-project/blob/main/Screenshots/create%20a%20new%20user.png

### 2️⃣ Delete User by ID
https://github.com/VirtualTechMaven/first-expressjs-project/blob/main/Screenshots/delete%20user%20by%20id.png

### 3️⃣ Get All Users
https://github.com/VirtualTechMaven/first-expressjs-project/blob/main/Screenshots/get%20all%20users.png

### 4️⃣ Get User by ID
https://github.com/VirtualTechMaven/first-expressjs-project/blob/main/Screenshots/get%20user%20by%20id.png

### 5️⃣ Update User by ID
https://github.com/VirtualTechMaven/first-expressjs-project/blob/main/Screenshots/update%20user%20by%20id.png

---

##  Example Response:

###  Get All Users:

[
  {
    "id": 1,
    "name": "Chioma Princess Ohwo",
    "email": "ohwoprincess@gmail.com",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Lourdes Williams",
    "email": "lourdeswilliams@gmail.com",
    "role": "editor"
  }
]

###  Create New User (POST):

####  Request Body:

{
  "name": "New User",
  "email": "newuser@example.com",
  "role": "subscriber"
}

#### Response:

{
  "id": 4,
  "name": "New User",
  "email": "newuser@example.com",
  "role": "subscriber"
}

---

## Commit Summary Table

| Version | Commit                       | Description                                      |
| ------- | ---------------------------- | ------------------------------------------------ |
| v1.0.0  | `init-project-setup`         | Initialized Express project with basic structure |
| v1.0.1  | `create-user-controller`     | Added controller logic for CRUD operations       |
| v1.0.2  | `link-routes-controller`     | Connected routes with controller                 |
| v1.0.3  | `add-postman-collection`     | Added Postman collection for API testing         |
| v1.0.4  | `add-screenshots-and-readme` | Documented API and included screenshots          |


---

## Best Practices Followed

- Separation of Concerns (Controllers, Routes, Utils)
- RESTful API Design Standards
- Consistent Naming Conventions
- JSON-based Responses
- Error Handling Middleware
- Postman Collection for API Testing
- GitHub Documentation and Screenshot Evidence

---

## Notes

- All routes are RESTful and follow Express.js best practices.
- Postman Desktop Agent is required for localhost testing.
- Ensure the server is running before sending requests.

---

## Author
Made by Chioma Princess Ohwo
Full Stack Web Developer | Cloud Architect | AI/ML Engineer








