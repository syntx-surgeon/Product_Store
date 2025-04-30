
# 🛒 PERN Stack Product Store

A simple and professional full-stack e-commerce product store using the PERN stack: 🐘 PostgreSQL (Neon), 🚂 Express.js, ⚛️ React.js, and 🟢 Node.js.

## ✨ Features

- 📝 Product CRUD operations
- 🛡️ Secure database with Neon Postgres
- 🔄 Real-time updates
- 📱 Responsive React UI
- 🔐 API security with Express
- 📦 Mobile-friendly design

## 🧰 Tech Stack

### 🖥️ Backend
- 🟢 Node.js
- 🚂 Express.js
- 🐘 PostgreSQL (Neon)
- 🔗 cors
- 🛡️ helmet
- 📊 morgan
- ⚙️ dotenv

### 💻 Frontend
- ⚛️ React.js
- 🔗 Axios
- 🛣️ React Router DOM
- 🎨 TailwindCSS
- 💡 React Icons

## 🚀 Getting Started

### 📋 Prerequisites
- 🟢 Node.js v14+
- 📦 npm or yarn
- 🐘 Neon Postgres account

### 🐘 Setup Neon Postgres

1. 📝 Sign up at [Neon](https://neon.tech)
2. 🗄️ Create a new project and get your connection string
3. 🏗️ Create the `products` table:
   ```sql
   CREATE TABLE products (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     description TEXT,
     price DECIMAL(10,2) NOT NULL,
     image_url TEXT,
     stock INTEGER NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

### ⚙️ Installation

1. 🌀 Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd PERN
   ```

2. 📦 Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. 📦 Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. 🛠️ Configure environment variables in `backend/.env`:
   ```
   PORT=5000
   DATABASE_URL=your_neon_postgres_connection_string
   NODE_ENV=development
   ```

5. ▶️ Start development servers:

   **🖥️ Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **💻 Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

## 📡 API Endpoints

- `GET /api/products` - 📦 List all products
- `GET /api/products/:id` - 🔍 Get a product by ID
- `POST /api/products` - ➕ Create a new product
- `PUT /api/products/:id` - ✏️ Update a product
- `DELETE /api/products/:id` - 🗑️ Delete a product

## 🏆 Best Practices

- 🚫 Never commit `.env` files; use `.env.example` for reference.
- ✅ Validate all API inputs and handle errors properly.
- 🛡️ Use prepared statements for database queries.
- 🧱 Use CORS and security middleware.
- 💾 Regularly back up your database (Neon automates this).

## 🚢 Deployment

- 🚂 Deploy backend (e.g., Railway): Connect your repo, set environment variables, and deploy.
- ⚛️ Deploy frontend (e.g., Vercel): Connect your repo and deploy.
- 🐘 Neon Postgres is cloud-hosted; update connection strings for production.

## 📄 License

MIT License. See LICENSE file for details.

## 🙏 Acknowledgments

- 🐘 [Neon Postgres](https://neon.tech)
- 🚂 [Express.js](https://expressjs.com)
- ⚛️ [React.js](https://reactjs.org)
- 🟢 [Node.js](https://nodejs.org)
