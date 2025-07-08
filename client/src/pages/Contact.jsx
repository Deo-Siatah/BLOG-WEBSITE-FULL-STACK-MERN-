// src/pages/Contact.jsx
function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📬 Contact Us</h1>

      <p className="mb-4 text-lg">
        We'd love to hear from you! Whether you have feedback, a collaboration idea, or a technical question — drop us a message.
      </p>

      <ul className="mb-6 space-y-2 text-gray-700">
        <li>📧 Email: <a href="mailto:deosiatah0@gmail.com" className="text-blue-600 hover:underline">webtalks.io@gmail.com</a></li>
        <li>🌐 Website: <a href="https://webtalks.io" className="text-blue-600 hover:underline">webtalks.io</a></li>
        <li>📍 Location: Nairobi, Kenya (Global Dev Community)</li>
      </ul>

      <p className="text-sm text-gray-500">
        We typically respond within 1–2 business days. You can also reach out on our social platforms linked in the footer.
      </p>
    </div>
  );
}

export default Contact;
