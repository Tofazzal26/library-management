# Library Management API 📙


A Restful API built with Express, TypeScript, and MongoDB, designed to manage books and borrowing operations for a library system.

## Live URL --> [LibraryManagement](https://library-management-six-xi.vercel.app)

### 🌐 Base URL

| Environment | URL                                                      |
| ----------- | -------------------------------------------------------- |
| Development | `http://localhost:<PORT>/api`                         |
| Production  | `https://library-management-six-xi.vercel.app` |

### 📌 Features

-  Add, update, delete, and view books
-  Borrow books with quantity and due date
-  Get a summarized borrow report by book
-  Filter, sort, books
-  Global error handling and clean code architecture



### List Of API's endpoints:

#### 1. book
   - `POST` Create Book
     - `/api/books`
   - `GET` Retrieve Book By Id
     - `/api/books/<bookId>`
   - `GET` Retrieve All Book
     - `/api/books`
     - `/api/books?filter=SCIENCE&sortBy=createdAt&sort=asc&limit=5`
   - `PUT` Update Book By Id
     - `/api/books/<bookId>`
   - `DELETE` Delete Book By Id
     - `/api/books/<bookId>`
#### 2. borrow

   - `POST` Borrow Book
     - `/api/borrow`
   - `GET` Borrow Book Summary
     - `/api/borrow`


### 1. Create a New Book

`POST` : `https://library-management-six-xi.vercel.app/api/books`

### 2. Retrieve All Book

`GET` `https://library-management-six-xi.vercel.app/api/books`

### 3. Retrieve Book By ID

`GET` `https://library-management-six-xi.vercel.app/api/books/68553f1267d438b9b3b44cc5`

### 4. Update Book By ID

`PUT` `https://library-management-six-xi.vercel.app/api/books/6855408767d438b9b3b44cd7`

### 5. Delete Book By ID

`DELETE` `https://library-management-six-xi.vercel.app/api/books/68553f1267d438b9b3b44cc5`

### 6. Borrow Book

`POST` `https://library-management-six-xi.vercel.app/api/borrow`


### 8. Borrow Book Summary

`GET` `https://library-management-six-xi.vercel.app/api/borrow`

### 🧰 Tech Stack

- **Backend**: Express.js, TypeScript

- **Database**: MongoDB with Mongoose

- **Hosting**: Vercel

- **Tools**: Postman, Vs Code, MongoDB Compass



## Installation Instructions

Clone the project

```bash
  git clone https://github.com/Tofazzal26/library-management.git
```

Go to the project directory

```bash
  cd library-management
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev 
```


## 📣 Let’s Connect!

#### Tofazzal Hossain

📧 afranislamabir6789@gmail.com

🔗 [LinkedIn](https://www.linkedin.com/in/tofazzalhossain-dev)  

I'm always open to feedback, collaboration, or new opportunities. Feel free to connect with me or check out the live demo.

