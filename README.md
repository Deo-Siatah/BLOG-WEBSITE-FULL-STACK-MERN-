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
