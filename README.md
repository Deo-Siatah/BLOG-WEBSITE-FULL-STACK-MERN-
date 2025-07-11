📝 Full Stack Blog Website (MERN)
Welcome to my first full-stack blog project, built with the MERN Stack (MongoDB, Express, React, Node.js)!
This app allows users to explore blog posts, filter by category, view individual blogs, and even add their own posts.

🌐 Live Demo
👉 Click here to view the live site

Backend API: https://your-backend-link.onrender.com

🚀 Features
💡 Create and publish blog posts
🗂️ Categorize blogs with tags
🔍 Search through latest posts
📄 View full blog content with images
🧾 Simple and responsive UI (built with Tailwind CSS)
🔧 Backend API with Express.js and MongoDB
⚙️ Full CRUD support for blogs and categories
🛠️ Tech Stack
Frontend

React
Tailwind CSS
Axios
React Router DOM
Vite
Backend

Node.js
Express.js
MongoDB (with Mongoose)
Dotenv
Cors
📂 Folder Structure
BLOG-WEBSITE-FULL-STACK-MERN/ ├── client/ # Frontend code (React + Vite) │ ├── src/ │ └── public/ ├── server/ # Backend code (Express + MongoDB) │ ├── routes/ │ ├── models/ │ └── controllers/ ├── .env # Environment variables (not committed) ├── package.json └── README.md

⚙️ Getting Started (Local Setup)
Prerequisites
Node.js + pnpm or npm
MongoDB Atlas account (or use local MongoDB)
1. Clone the Repository
git clone https://github.com/yourusername/BLOG-WEBSITE-FULL-STACK-MERN.git
cd BLOG-WEBSITE-FULL-STACK-MERN


<h3>Setting Up Backend</h3>
<pre><code>cd server
pnpm install
<!-- or npm install -->

<!-- Create a .env file and add: -->
MONGO_URI=your-mongodb-uri
NODE_ENV=development
PORT=5000

pnpm start
</code></pre>

<h3>Setting Up Frontend</h3>
<pre><code>cd client
pnpm install
<!-- or npm install -->

<!-- Create a .env file and add: -->
VITE_API_URL=http://localhost:5000

pnpm dev
</code></pre>

## 🧠 What I Learned

- Handling both **frontend and backend** in a single project
- Debugging **MongoDB Atlas** connectivity issues
- Designing UI using **Tailwind CSS** for sleek and responsive layouts
- Deploying **frontend and backend apps** separately on [Render](https://render.com/)
- Writing **clean, modular code** for better readability and maintainability

<h2>📦 Deployment</h2>
<p>Deployed via <strong>Render</strong>:</p>
<ul>
  <li>Frontend hosted as a <em>static site</em></li>
  <li>Backend deployed as a <em>Node service</em></li>
  <li>Connected via environment variable <code>VITE_API_URL</code></li>
</ul>

<h2>📬 Contact</h2>
<p>Feel free to reach out:</p>
<ul>
  <li>🌐 LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin">Your LinkedIn</a></li>
  <li>📧 Email: <a href="mailto:your@email.com">deosiatah0@gmail.com</a></li>
</ul>
