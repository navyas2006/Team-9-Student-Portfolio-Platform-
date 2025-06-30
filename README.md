---

# 🖌️ Collaborative Drawing Platform

A real-time, interactive web application that allows **multiple users to draw together** on a shared canvas via WebSockets. Built with **Node.js**, **Express**, **HTML5 Canvas**, and **Socket.io** for a seamless collaborative experience.

> ⚠️ **Note:** Persistent drawing storage using MongoDB is a planned feature but not yet implemented.

---

## 📋 Table of Contents

* [Features](#features)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)
* [Technologies Used](#technologies-used)
* [About HTML5 Canvas](#about-html5-canvas)
* [Contributing](#contributing)
* [License](#license)

---

## ✅ Features

* 🎯 **Real-Time Collaboration:** Draw live with others using WebSockets.
* 🔐 **Room-Based Sessions:** Users can join unique rooms via IDs.
* 🎨 **Canvas Drawing Tools:** Supports multiple colors and pen options.
* 📱 **Responsive Design:** Works on desktop, tablet, and mobile devices.
* 💾 *(Coming Soon)*: Persistent canvas using MongoDB.

---

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have the following installed:

* ✅ Node.js (v12.x or higher)
* ✅ npm (v6.x or higher)
* ⚙️ *(Optional for future use)* MongoDB (local or hosted via MongoDB Atlas)

---

### 🛠️ Installation

```bash
# Clone the repo
git clone https://github.com/your-username/collaborative-drawing-platform.git
cd collaborative-drawing-platform
```

#### Install Backend Dependencies:

```bash
cd server
npm install
```

#### (Optional) Environment Variables

If you're planning to use MongoDB later, create a `.env` file in `/server`:

```
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

---

### 🔄 Run the App

#### Start Server

```bash
cd server
npm start
```

#### Open Frontend

Simply open `frontend/index.html` in your browser
OR use **Live Server** extension in VS Code.

---

## 🧪 Usage

* ✏️ **Draw Together:** Use mouse or touch to draw. Others see it instantly.
* 🎨 **Change Color:** Select from toolbar.
* 🧼 **Clear Canvas:** Wipes the canvas for everyone in the room.
* 🧍 **Join Room:** Use a Room ID to join a shared drawing session.

---

## 🧰 Technologies Used

### Frontend

* HTML5 / CSS3 / JavaScript
* Socket.io-client
* HTML5 Canvas API

### Backend

* Node.js / Express.js
* Socket.io
* *(Planned)* MongoDB, Mongoose

---

## 🧾 About HTML5 Canvas

The `<canvas>` element allows JavaScript to draw 2D graphics directly on a bitmap — ideal for real-time free-hand drawing.

```js
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
```

We use this to:

* Draw dynamically based on user input
* Sync drawings across sockets

---

## 🤝 Contributing

We welcome contributions! 🙌

```bash
# 1. Fork the repository

# 2. Create a new branch
git checkout -b feature/your-feature

# 3. Commit your changes
git commit -m "Added new feature"

# 4. Push to your fork
git push origin feature/your-feature

# 5. Open a Pull Request
```

---

## 📄 License

Licensed under the **MIT License**. See the `LICENSE` file for details.

---
