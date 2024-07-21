# 📝 Todo/Task Management App

Welcome to the Todo/Task Management App! This project is built using Next.js, Clerk for authentication, MongoDB as the database, and Prisma as the ORM. It allows users to manage their tasks efficiently with full CRUD operations and categorization features.

## 🚀 Features

- 🔐 **Authentication**: Secure user authentication using Clerk.
- ✍️ **CRUD Operations**: Create, Read, Update, and Delete tasks seamlessly.
- 📂 **Categories**: Organize tasks into categories for better management.

## 🛠️ Tech Stack

- **Frontend**: Next.js
- **Authentication**: Clerk
- **Database**: MongoDB
- **ORM**: Prisma

## 📦 Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/maahin2005/Task_Manager.git
   cd todo-task-management
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your environment variables. Refer to the `.env.example` file for the required variables.

4. Run the development server:

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🗂️ Project Structure

## 🔄 CRUD Operations

- **Create**: Add a new task with title, description, and category.
- **Read**: View all tasks in a list, filtered by categories.
- **Update**: Edit existing tasks.
- **Delete**: Remove tasks from the list.

## 🎨 Styling

The app uses Tailwind CSS for styling, ensuring a responsive and modern design.

## ⚙️ Prisma Setup

To set up Prisma, run the following commands:

1. Generate Prisma client:

   ```sh
   npx prisma generate
   ```

2. Apply database migrations:
   ```sh
   npx prisma migrate dev
   ```

## 👥 Contributors

- **Mahin Malek** - [GitHub](https://github.com/maahin2005)

Feel free to open issues or submit pull requests to help improve the project! 🌟
