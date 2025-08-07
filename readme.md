# 🌾 FarmFresh AI - Smart Agriculture Platform

FarmFresh AI is a **full-stack agriculture platform** built with modern web technologies. It connects **farmers**, **buyers**, and **admins** to trade fresh produce efficiently using AI-powered features, secure authentication, and easy-to-use interfaces.

---
### 📁 Clone the Project

```bash
git clone https://github.com/Rajyagur-Nayan/codewave1.0-hackHustler.git
cd project
cd frontend
cd backend
now in both npm install
and npm run dev 
## 🚀 Features

### 👨‍🌾 For Farmers:
- Add, edit, and delete products with image uploads
- View and manage product listings
- Secure registration and login

### 🛒 For Buyers:
- Browse available farm products with image, price, and quantity
- View detailed product information
- Easy-to-navigate product listing

### 🛠️ Admin Panel (Coming Soon):
- Approve or reject farmer products
- Manage users (farmers/buyers)
- Platform analytics (planned)

---

## 📸 Screenshots

### 🔐 Authentication
<img src="./screenshots/signup.png" width="400" />
<img src="./screenshots/login.png" width="400" />


---

## 🏗️ Tech Stack

| Layer       | Technology                       |
|------------|-----------------------------------|
| Frontend   | Next.js + Tailwind CSS + Vite +   |
| Backend    | Node.js + Express.js              |
| Database   | PostgreSQL                        |
| Auth       | JWT (JSON Web Tokens)             |
| Image Upload | Multer (stored locally in `uploads/`) |
| Dev Tools  | Nodemon, Postman                  |
| Deployment | Currently local (future: Render / Vercel) |

---

## 🧩 Folder Structure

```bash
farmfresh-ai/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth/
│   │   │   ├── buyer/
│   │   │   └── farmer/
│   │   └── middleware/
│   ├── connections/
│   ├── uploads/                # Product images stored here
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── public/
│   └── vite.config.js or next.config.js
├── screenshots/
