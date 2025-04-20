# PERN Stack Product Store with Neon Postgres

A full-stack e-commerce product store built using PostgreSQL (Neon), Express.js, React.js, and Node.js (PERN stack).

## Features

- 🛍️ Product Management (CRUD operations)
- 🔐 Secure Database with Neon Postgres
- ⚡ Real-time updates
- 🎨 Responsive UI with React
- 🔒 API Security with Express
- 📱 Mobile-friendly design

## Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL (Neon)
- Cors
- Helmet (Security)
- Morgan (Logging)
- dotenv (Environment Variables)

### Frontend
- React.js
- Axios
- React Router DOM
- TailwindCSS
- React Icons

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Neon Postgres account

### Setting up Neon Postgres
1. Sign up at [Neon](https://neon.tech)
2. Create a new project
3. Get your connection string from the dashboard
4. Create a products table using the following SQL:
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

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd PERN
   ```

2. Install Backend Dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install Frontend Dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Configure Environment Variables
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   DATABASE_URL=your_neon_postgres_connection_string
   NODE_ENV=development
   ```

5. Start the Development Servers
   
   Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## Project Structure

## Working with Neon Postgres

### Key Benefits of Neon
- Serverless PostgreSQL
- Auto-scaling
- Built-in branching
- Pay-per-use pricing
- Automatic backups
- Global access

### Connection Example
```javascript
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
```

## Development Best Practices

1. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.example` for reference
   - Keep sensitive data secure

2. **API Security**
   - Implement rate limiting
   - Use CORS properly
   - Validate all inputs
   - Implement proper error handling

3. **Database**
   - Use prepared statements
   - Implement proper error handling
   - Regular backups (Automated with Neon)
   - Connection pooling

## Deployment

1. **Backend Deployment (Example with Railway)**
   - Connect your GitHub repository
   - Set environment variables
   - Deploy the backend

2. **Frontend Deployment (Example with Vercel)**
   - Connect your GitHub repository
   - Configure build settings
   - Deploy the frontend

3. **Database**
   - Neon Postgres is already cloud-hosted
   - Update connection strings for production

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- [Neon Postgres](https://neon.tech) for the database service
- [Express.js](https://expressjs.com)
- [React.js](https://reactjs.org)
- [Node.js](https://nodejs.org)
