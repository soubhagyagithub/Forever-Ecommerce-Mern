# 🛒 MERN Stack E-commerce Application

A full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application includes user and admin functionalities such as product browsing, filtering, search, cart management, payments, and a secure admin dashboard for managing products and orders.

## 🚀 Live Demo

Live Link (https://forever-ecommerce-frontend-sepia.vercel.app/))

---

## 📌 Features

### 👥 User Side

- 🛍️ **Product Listing** – View all available products with images, pricing, and categories.
- 🌟 **Best Seller Section** – Highlighted products based on popularity or custom logic.
- 🔍 **Search Products** – Keyword-based search functionality.
- 🧩 **Filter by Category** – Filter products by Men, Women, or Kids.
- 📊 **Sort Products** – Sort by price: Low to High / High to Low.
- 🛒 **Cart System** – Add/remove items, update quantities, and view total.
- ✅ **Product Detail Page** – View detailed information about each product.
- 💳 **Checkout & Payments** – Payment integration using:
  - Razorpay
  - Stripe
  - Cash on Delivery (COD)
- 🧾 **Order Creation** – Orders saved securely on successful payment.

### 🛠️ Admin Dashboard (Protected Route)

- 🔐 **Secure Admin Login**
- ➕ **Add Products** – Create new products with all necessary details.
- ✏️ **Edit Products** – Update product info, price, category, etc.
- ❌ **Delete Products**
- 📦 **Manage Orders** – View all orders and update order status (e.g., Pending, Shipped, Delivered).

---

🧰 Tech Stack 🧰
🚀 Frontend

-React.js – Component-based UI development

-Axios – HTTP client for API communication

-Tailwind CSS – Utility-first CSS framework for styling

🛠️ Backend
-Node.js – JavaScript runtime environment

-Express.js – Web framework for building REST APIs

-MongoDB + Mongoose – NoSQL database with schema modeling

-Cloudinary – Cloud storage for product image uploads

-Multer – Middleware for handling file uploads

-dotenv – Environment variable management

-CORS – Handling cross-origin requests



🔐 Authentication & Security
-JWT (jsonwebtoken) – For secure login and protected routes

-Bcrypt – Password hashing for user credentials


💳 Payments
-Razorpay Integration

-Stripe Integration

-Cash on Delivery (COD)

---
## 🛠️ Installation and Setup

1. **Clone the repo**

```bash
git clone https://github.com/soubhagyagithub/Forever-Ecommerce-Mern.git
cd mern-ecommerce

cd client
npm install

cd ../server
npm install

Configure Environment Variables

Create a .env file in the server folder:
PORT=5000
MONGODB_URI=mongodb+srv:/*************************
JWT_SECRET=*********************
CLOUDINARY_API_KEY =************************8
CLOUDINARY_SECRET_KEY=***********************
CLOUDINARY_NAME=*********************
ADMIN_EMAIL=**************************8
ADMIN_PASSWORD=****************
STRIPE_SECRET_KEY=************************************
RAZORPAY_KEY_ID	= ***********************
RAZORPAY_KEY_SECRET = ********************************

# Start server
cd server
node server.js

# Start client
cd client
npm run dev

# Start admin
cd admin
npm run dev


