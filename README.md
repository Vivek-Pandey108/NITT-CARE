# 🏥 NITT CARE - Doctor Appointment Booking Web App

**NITT CARE** is a full-stack web application designed to make healthcare more accessible by simplifying the process of booking doctor appointments.  
It offers three types of logins — **Patient**, **Doctor**, and **Admin** — each with role-specific functionalities.  

The platform also integrates **secure online payment gateways (Stripe and Razorpay)** for smooth and reliable transactions.  
Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, **NITT CARE** ensures an efficient and user-friendly experience for both patients and healthcare providers.

---

## ⚙️ Features
- 🩺 **Patient Login:** Book and manage doctor appointments, view history, and make payments online.  
- 👨‍⚕️ **Doctor Login:** Manage patient appointments, view schedules, and update availability.  
- 🛠️ **Admin Login:** Oversee platform activities, manage doctors, patients, and appointments.  
- 💳 **Secure Payments:** Integrated with **Stripe** and **Razorpay** for easy and safe transactions.  
- 🔐 **Authentication:** Secured using **JWT (JSON Web Token)**.  

---

## 🛠️ Tech Stack
**Frontend:** React.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Payment Gateways:** Stripe, Razorpay  
**Authentication:** JSON Web Token (JWT)

---

## ⚙️ Installation

### 🧩 Method 1: Manual Installation

#### 1️⃣ Fork this Repository
Click the **Fork** button at the top-right corner of this page to create your own copy.

#### 2️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/nittcare.git
cd nittcare
```
### 3️⃣ Create .env Files
```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
VITE_BACKEND_URL=http://localhost:5000


```

### 4️⃣ Install Dependencies
```bash
# In root directory
npm install

# In client directory
cd frontend
npm install
```
### 5️⃣ Start the Servers
- Frontend
  ```bash
  cd client
  npm run dev
- Backend
   ```bash
   npm run server
   ```
### 6️⃣ Access the Application
```bash
http://localhost:5173/

