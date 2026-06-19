# 🚀 Deployment Guide - Phase 1 Complete!

## Timeline
- **Local Setup:** 5-10 menit
- **Supabase Database Setup:** 5 menit
- **GitHub Push:** 5 menit
- **Vercel Deployment:** 3-5 menit
- **Total:** ~25 menit ✨

---

## 📋 STEP-BY-STEP GUIDE

### STEP 1️⃣: Persiapan Lokal (5-10 menit)

#### 1.1 Buka Terminal / Command Prompt
```bash
cd path/to/jastip-system
```

#### 1.2 Install Dependencies
```bash
npm install
```

Tunggu sampai selesai (ambil kopi ☕ sementara menunggu!)

#### 1.3 Test Aplikasi Lokal
```bash
npm run dev
```

Buka browser: http://localhost:3000
- Anda akan diarahkan ke `/login`
- Semuanya sudah berjalan! ✅

---

### STEP 2️⃣: Setup Database di Supabase (5 menit)

#### 2.1 Buka Supabase Dashboard
1. Go to: https://supabase.com/dashboard
2. Pilih project `hltjnbdgbdjtjnxtbrzf`

#### 2.2 Create Users Table
1. Click "SQL Editor" (sidebar kiri)
2. Copy-paste isi dari file: `SUPABASE_SETUP.md` (bagian SQL queries)
3. Click "Run" button
4. Tunggu sampai "Success" ✅

#### 2.3 Create Demo Users
**Via Dashboard (Recommended):**
1. Click "Authentication" → "Users"
2. Click "Add user"
3. Email: `admin@jastip.com`
4. Password: `admin123`
5. Click "Create user"

Repeat untuk:
- Email: `staff@jastip.com`
- Password: `staff123`

#### 2.4 Setup Redirect URLs
1. Click "Authentication" → "Settings"
2. Scroll ke "Authorized Redirect URLs"
3. Add these URLs:
   - `http://localhost:3000/`
   - `http://localhost:3000/dashboard`
4. Scroll ke "Email Auth" → set "Confirm email" to `OFF` (for dev)
5. Click "Save"

#### 2.5 Test Login Lokal
1. Back to http://localhost:3000
2. Login dengan: `admin@jastip.com` / `admin123`
3. Jika berhasil → Anda akan see Dashboard ✅

---

### STEP 3️⃣: Push to GitHub (5 menit)

#### 3.1 Initialize Git (jika belum)
```bash
git init
git add .
git commit -m "Phase 1: Authentication system complete"
```

#### 3.2 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `jastip-system`
3. Description: `Manajemen Jastip Internasional`
4. Make it **PUBLIC** ✅
5. Click "Create repository"

#### 3.3 Push ke GitHub
```bash
git branch -M main
git remote add origin https://github.com/Yuniavanleeuwen/jastip-system.git
git push -u origin main
```

**Selesai! Sekarang di GitHub ✅**

---

### STEP 4️⃣: Deploy ke Vercel (3-5 menit)

#### 4.1 Login ke Vercel
1. Go to https://vercel.com
2. Click "Sign up" or "Sign in with GitHub"
3. Authorize Vercel untuk akses GitHub Anda

#### 4.2 Import Proyek
1. Click "Add New..." → "Project"
2. Pilih repository: `jastip-system`
3. Click "Import"

#### 4.3 Configure Environment Variables
**PENTING!** Jangan skip step ini!

1. Scroll ke "Environment Variables"
2. Tambah:
   - Name: `VITE_SUPABASE_URL`
   - Value: `https://hltjnbdgbdjtjnxtbrzf.supabase.co`
   - Click "Add"

3. Tambah lagi:
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: `sb_publishable_p7cZWggr0U422XwL-mBqMA_dQx5R6gk`
   - Click "Add"

4. Click "Deploy"

#### 4.4 Tunggu Deployment Selesai
- Vercel akan build & deploy aplikasi
- Tunggu sampai "Deployment successful" ✅
- Klik link yang muncul → aplikasi live! 🎉

#### 4.5 Update Supabase Redirect URLs
Kembali ke Supabase Dashboard:
1. Authentication → Settings
2. Add your Vercel URL:
   - `https://your-vercel-domain.vercel.app/`
   - `https://your-vercel-domain.vercel.app/dashboard`
3. Save

---

## ✅ VERIFICATION CHECKLIST

Setelah semua steps selesai, verify:

- [ ] Aplikasi local berjalan: http://localhost:3000
- [ ] Login berhasil dengan `admin@jastip.com`
- [ ] Dashboard tampil setelah login
- [ ] GitHub repository ada
- [ ] Vercel deployment successful
- [ ] Aplikasi live di Vercel URL
- [ ] Login juga bekerja di Vercel URL

---

## 🎯 Testing Demo Accounts

**Admin Account:**
- Email: `admin@jastip.com`
- Password: `admin123`
- Features: Lihat semua menu (Master Data, Laporan, etc)

**Staff Account:**
- Email: `staff@jastip.com`
- Password: `staff123`
- Features: Menu terbatas (hanya core features)

---

## 📊 Phase 1 Status: ✅ COMPLETE

### Fitur yang sudah jalan:
✅ Login/Registration
✅ Role-based Access Control
✅ Session Management
✅ Logout
✅ Protected Routes
✅ Database Integration

### Next Phase (Phase 2):
- Master Data Management
- Customer Management
- Channel & Currency Setup
- Settings & Configuration

---

## 🆘 TROUBLESHOOTING

### Login error: "Invalid credentials"
→ Pastikan user sudah dibuat di Supabase Authentication

### Aplikasi blank di Vercel
→ Check environment variables di Vercel settings

### "Cannot find module" error
→ Run: `npm install` dan `npm run build`

### Masih error?
→ Check browser console (F12) untuk detail error

---

## 🎉 SELAMAT!

**Phase 1 Development: COMPLETE ✅**

Aplikasi Anda sekarang:
- ✅ Online & live
- ✅ Multi-user ready
- ✅ Secure authentication
- ✅ Role-based access

**Tim 6 orang Anda bisa mulai login dan explore system!**

---

**Ready untuk Phase 2?** 
Katakan "Phase 2" kapan saja untuk mulai development Master Data! 🚀
