# 🎬 Instagram Clone

![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-10-ffa726?style=flat-square&logo=firebase)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2-319795?style=flat-square&logo=chakraui)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)
![Status](https://img.shields.io/badge/Status-Active-22c55e?style=flat-square)

Aplikasi Instagram clone full-featured dengan **React**, **Firebase**, dan **Chakra UI**. Mencakup authentication, feed posts, user profiles, search, real-time interactions, dan responsive design untuk semua ukuran layar.

<img width="1920" height="964" alt="THREADBOX" src="https://github.com/user-attachments/assets/438c29a4-679e-4a4c-a121-89231a459932" />


---

## ✨ Features

- 🔐 **Authentication** — Sign up & login dengan Firebase Auth
- 📸 **Create Posts** — Upload foto dengan caption ke Cloudinary
- ❤️ **Interactions** — Like, comment, dan follow users
- 👥 **User Profiles** — View profile, edit bio, follow/unfollow
- 🔍 **Search** — Cari users berdasarkan username
- 📱 **Responsive** — Optimized untuk desktop, tablet, dan mobile (412px+)
- 🎨 **Retro Design** — Bold borders, shadows, dan aesthetic yang unique
- ⚡ **Smooth Animations** — Framer Motion untuk transisi UI
- 🔄 **Real-time Updates** — Firestore untuk data synchronization

---

## 🧰 Tech Stack

**Frontend**

- React 18 + Vite
- Chakra UI 2
- React Router v6
- Framer Motion
- React Firebase Hooks

**Backend & Services**

- Firebase (Auth, Firestore, Hosting)
- Cloudinary (Image upload & storage)
- Zustand (State management)

---

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── FeedPosts/      # Feed & post components
│   ├── Profile/        # Profile components
│   ├── Sidebar/        # Navigation & sidebar
│   └── Comment/        # Comment components
├── pages/              # Page components
│   ├── AuthPage/       # Login & signup
│   ├── homePage/       # Feed page
│   └── ProfilePage/    # User profile
├── store/              # Zustand state management
├── hooks/              # Custom React hooks
├── firebase/           # Firebase config
├── styles/             # Theme & global styles
├── utils/              # Utility functions
└── App.jsx
```

---

## ✅ Prerequisites

Pastikan sudah terinstall:

- Node.js ≥ 16
- npm ≥ 6
- Git
- Akun [Firebase](https://firebase.google.com)
- Akun [Cloudinary](https://cloudinary.com)

---

## 🚀 Getting Started

### 1. Clone repository

```bash
git clone https://github.com/Silaenn/instaClone.git
cd instaClone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Firebase

1. Buat Firebase project di [Firebase Console](https://console.firebase.google.com)
2. Copy config dari Firebase settings
3. Buat `.env` file di root directory

### 4. Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` dan isi variabel:

| Key | Keterangan |
|-----|-----------|
| `VITE_FIREBASE_API_KEY` | Firebase API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | Cloudinary unsigned upload preset |

**Setup Cloudinary:** Buat unsigned upload preset di Cloudinary dashboard untuk image uploads.

### 5. Run development server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

---

## 📜 Available Scripts

| Command | Keterangan |
|---------|-----------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint linting |

---

## 🧪 Testing

### User Flow
1. **Sign Up** — Create new account
2. **Create Post** — Upload photo dengan caption
3. **Browse Feed** — View posts dari users yang difollow
4. **Search Users** — Cari dan follow users lain
5. **View Profile** — Check user profile & posted content
6. **Interact** — Like, comment, follow/unfollow

### Test Scenarios
- ✅ Create & edit profile
- ✅ Upload posts dengan berbagai ukuran foto
- ✅ Like & comment pada posts
- ✅ Search users
- ✅ Follow/unfollow users
- ✅ Test responsiveness di mobile browser
- ✅ Verify real-time data updates

---

## 📦 Build & Deploy

### Production Build

```bash
npm run build
npm run preview
```

Build files akan tersimpan di `dist/` folder.

### Deploy ke Vercel

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy!

---

## 🎨 Design System

Project menggunakan **retro design aesthetic** dengan:
- Bold borders (3-4px solid black)
- Offset shadows (4px-12px)
- Tight spacing
- Vibrant colors dengan custom theme
- Fully responsive layout

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues & pull requests.

---

**Made with ❤️ by Silaenn**
