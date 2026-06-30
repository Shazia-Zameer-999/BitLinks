<div align="center">

# 🔗 BitLinks

A modern URL shortener built with **Next.js**, **MongoDB**, and **Resend**, featuring custom aliases, server-side validation, dynamic redirects, and a responsive user interface.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

**🌐 Live Demo:** https://bit-links-zeta.vercel.app

</div>

---

# 📖 Overview

BitLinks is a full-stack URL shortening application that allows users to create custom short URLs, manage redirects through MongoDB, and submit contact messages that are stored in the database and delivered via Resend.

The project was built with the Next.js App Router and demonstrates modern full-stack development practices using server-side API routes, MongoDB Atlas, and responsive UI design.

---

# ✨ Features

- 🔗 Create custom short URLs
- 🚀 Instant redirect to original destination
- 🛡 Duplicate alias validation
- 📩 Contact form with email notifications
- 💾 MongoDB Atlas integration
- 🎨 Responsive modern UI
- ⚡ Built using Next.js App Router
- 🌙 Animated interface using Framer Motion
- 📱 Mobile friendly
- 📜 Legal pages (Privacy Policy & Terms)

---

# 🖼 Screenshots

<div align="center">
  <a href="/public/demo2.png">
    <img src="/public/demo2.png" alt="BitLinks Banner" width="800"/>
  </a>
</div>
<br>

<div align="center">
  <a href="/public/demo1.png">
    <img src="/public/demo1.png" alt="BitLinks Banner" width="800"/>
  </a>

</div>

---

# 🏗 Architecture

```
User
   │
   ▼
Next.js Frontend
   │
   ▼
API Routes
   │
   ├── MongoDB Atlas
   │
   └── Resend Email API
```

---

# ⚙ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 |
| Language | JavaScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Email | Resend |
| Deployment | Vercel |

---

# 📂 Project Structure

```
BitLinks
│
├── app/
│   ├── api/
│   ├── shorten/
│   ├── about/
│   ├── contact/
│   ├── privacy/
│   ├── terms/
│   └── [shorturl]/
│
├── components/
├── models/
├── lib/
├── public/
└── README.md
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/Shazia-Zameer-999/BitLinks.git

cd BitLinks
```

## Install dependencies

```bash
npm install
```

## Configure environment variables

Create a file named

```text
.env.local
```

and add

```env
MONGODB_URI=your_mongodb_connection_string

RESEND_API_KEY=your_resend_api_key
```

---

## Start the development server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

# 🌍 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| MONGODB_URI | ✅ | MongoDB Atlas connection string |
| RESEND_API_KEY | ✅ | API key used to send emails |

---

# 📡 API Endpoints

## Generate Short Link

```
POST /api/generate
```

Creates a new shortened URL.

---

## Contact Form

```
POST /api/contact
```

Stores the contact request and sends an email using Resend.

---

# 🧩 Application Routes

| Route | Description |
|--------|-------------|
| `/` | Landing Page |
| `/shorten` | Create a shortened URL |
| `/about` | About |
| `/contact` | Contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/[shorturl]` | Dynamic Redirect |

---

# 🔄 Workflow

```text
Enter URL
      │
      ▼
Choose Custom Alias
      │
      ▼
Server Validation
      │
      ▼
Store in MongoDB
      │
      ▼
Generate Short Link
      │
      ▼
Visitor Opens Link
      │
      ▼
Redirect to Original URL
```

---

# 📦 Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint.

---

# 🚀 Deployment

The application can be deployed to **Vercel**.

Required environment variables:

- MONGODB_URI
- RESEND_API_KEY

---

# 🛣 Roadmap

- [x] URL shortening
- [x] Dynamic redirects
- [x] MongoDB integration
- [x] Contact form
- [x] Email notifications
- [ ] QR Code generation
- [ ] Analytics dashboard
- [ ] User authentication
- [ ] Click tracking
- [ ] Link expiration
- [ ] Custom domains
- [ ] Dashboard for managing links
- [ ] Rate limiting

---

# 🤝 Contributing

Contributions are always welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 🐞 Reporting Issues

If you discover a bug, please open a GitHub Issue with:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

---

# 🔒 Security

Please do not publicly disclose security vulnerabilities.

Refer to the project's **SECURITY.md** for responsible disclosure instructions.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👩‍💻 Author

**Shazia Zameer**

- GitHub: https://github.com/Shazia-Zameer-999
- Portfolio: https://www.datendiva.me

---

<div align="center">

⭐ If you found this project useful, consider starring the repository!

</div>