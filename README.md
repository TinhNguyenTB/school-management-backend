# School Management System API

## 📌 Overview
This project is a **School Management System API** built using **NestJS** and **Prisma ORM** with **MySQL** as the database. It provides functionalities for managing students, teachers, classes, grades, lessons, attendance, and announcements.

## 🚀 Features
- **User Management**: Admins, Teachers, and Students with unique roles.
- **Class & Grade Management**: Assign students to classes and grades.
- **Lesson Scheduling**: Define lessons with subjects, teachers, and time slots.
- **Attendance Tracking**: Record student attendance for each lesson.
- **Announcements**: Manage announcements for specific classes.

## 🛠️ Tech Stack
- **Backend**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: MySQL

## 📂 Project Structure
```
root/
 ├── prisma/        # Prisma schema & migrations
 ├── src/           # Main source code
 │   ├── modules/   # Feature-based modules
 │   ├── services/  # Business logic
 │   ├── controllers/ # API endpoints
 │   ├── main.ts    # Entry point
 ├── package.json   # Dependencies
 ├── tsconfig.json  # TypeScript config
 ├── README.md      # Documentation
```

## 🔧 Setup & Installation
### 1️⃣ Clone the repository:
```sh
git clone https://github.com/TinhNguyenTB/school-management-backend.git
cd school-management-api
```
### 2️⃣ Install dependencies:
```sh
npm install
```
### 3️⃣ Configure environment variables:
Create a `.env` file in the root directory and add:
```
DATABASE_URL="mysql://user:password@localhost:3306/school_db"
```
### 4️⃣ Run Prisma migrations:
```sh
npx prisma migrate dev --name init
```
### 5️⃣ Start the server:
```sh
npm run start:dev
```

## 📖 API Endpoints (Examples)
| Method | Endpoint         | Description                    |
|--------|-----------------|--------------------------------|
| GET    | `/students`     | Get all students              |
| GET    | `/teachers`     | Get all teachers              |
| POST   | `/classes`      | Create a new class            |
| PUT    | `/students/:id` | Update student details        |
| DELETE | `/lessons/:id`  | Delete a lesson               |

---
### 🔗 Contributors & License
**Developed by [TinhNguyenTB]**

Licensed under [MIT License](LICENSE).

