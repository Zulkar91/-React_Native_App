# 📱 Recipe App (Backend + Mobile)

A modern **full-stack recipe application** with a Node.js backend and a React Native (Expo) mobile app.  
Supports **Clerk authentication**, Neon (PostgreSQL) database, and environment-based configuration.

---

## 🗂 Project Structure

```
/backend   → Node.js + Express API Server
/mobile    → React Native (Expo) Mobile App
```

---

## 🧪 Environment Setup

### **Backend (`/backend`)**

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. Create `.env` file:
   ```bash
   vi .env
   ```

3. Add the following variables:
   ```env
   # Server Config
   PORT=5001
   NODE_ENV=development

   # Database (Neon/Postgres)
   DATABASE_URL=your_neon_db_url
   ```

---

### **Mobile App (`/mobile`)**

1. Navigate to mobile folder:
   ```bash
   cd mobile
   ```

2. Create `.env` file:
   ```bash
   vi .env
   ```

3. Add the following variables:
   ```env
   # Clerk Auth Config
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

---

## 🔧 Run the Backend

```bash
cd backend
npm install        # Install dependencies
npm run dev        # Start development server
```

Backend will run at:  
```
http://localhost:5001
```

---

## 📱 Run the Mobile App

```bash
cd mobile
npm install        # Install dependencies
npx expo start     # Start Expo development server
```

📌 **Tip:** Use `LAN` mode in Expo Dev Tools for connecting from a real device on the same network.

---

## 🚀 Deployment Notes

- **Environment Variables:**  
  Make sure `.env` files are configured for production before deployment.
- **Security:**  
  Never commit `.env` files to git. Use `.gitignore`.
- **Database:**  
  Ensure your Neon database is accessible from your deployment environment.

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express, PostgreSQL (Neon)
- **Mobile:** React Native, Expo
- **Auth:** Clerk
- **Package Manager:** npm
---
