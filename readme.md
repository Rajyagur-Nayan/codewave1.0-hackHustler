# 🌾 FarmFresh AI - Smart Agriculture Platform

FarmFresh AI is a full-stack web platform that connects **farmers**, **buyers**, and **admins** to trade fresh farm produce efficiently using AI-powered features. Built with **React**, **Express**, **PostgreSQL**, and **JWT authentication**.

---

## 🚀 Features

### 👨‍🌾 For Farmers:
- Add, edit, delete products with images
- Track stock and availability
- Secure login and signup

### 🛒 For Buyers:
- Browse available farm products
- View product details with image and price
- Purchase from trusted farmers

### 🛠️ Admin Panel:
- Manage user roles (farmer/buyer)
- Approve or remove products
- View site analytics (future feature)

---

## 📸 Screenshots

### 🔐 Authentication
<img src="./screenshots/login-form.png" width="400" />
<img src="./screenshots/signup-form.png" width="400" />

### 🌽 Add Product Form (Farmer)
<img src="./screenshots/add-product-form.png" width="400" />

### 🛍️ Product Listing
<img src="./screenshots/product-listing.png" width="400" />

---

## 🏗️ Tech Stack

| Layer       | Technology                        |
|------------|-----------------------------------|
| Frontend   | React + Tailwind CSS + Vite       |
| Backend    | Node.js + Express.js              |
| Database   | PostgreSQL                        |
| Auth       | JWT (JSON Web Tokens)             |
| Storage    | Multer (for images), Local upload |
| Deployment | Localhost (for now)               |

---

## 📁 Folder Structure

```bash
farmfresh-ai/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   └── middleware/
│   └── connections/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── uploads/
├── screenshots/
├── README.md
