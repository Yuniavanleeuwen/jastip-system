# 🎯 Quick Reference - Jastip System Phase 1

## 🚀 Quick Start (30 seconds)

```bash
# Install & run
npm install
npm run dev

# Login with:
# Email: admin@jastip.com
# Password: admin123
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main routing |
| `src/pages/Login.jsx` | Login page |
| `src/pages/Dashboard.jsx` | Dashboard |
| `src/context/AuthContext.jsx` | Auth state |
| `.env.local` | Credentials (DO NOT COMMIT) |

## 🔐 Login Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | `admin@jastip.com` | `admin123` |
| Staff | `staff@jastip.com` | `staff123` |

## 📋 Project Commands

```bash
# Development
npm run dev          # Start local server

# Production
npm run build        # Build untuk production
npm run preview      # Preview build

# Deployment
git push origin main # Push ke GitHub (auto deploy ke Vercel)
```

## 🌐 Important URLs

| Service | URL |
|---------|-----|
| Local App | http://localhost:3000 |
| GitHub | https://github.com/Yuniavanleeuwen/jastip-system |
| Supabase | https://supabase.com/dashboard |
| Vercel | https://vercel.com |

## 📊 Project Structure Quick View

```
src/
├── pages/           # Page components
│   ├── Login.jsx
│   └── Dashboard.jsx
├── components/      # Reusable components
│   └── ProtectedRoute.jsx
├── context/         # State management
│   └── AuthContext.jsx
├── config/          # Configuration
│   └── supabase.js
├── App.jsx          # Main routing
└── main.jsx         # Entry point
```

## 🔗 API/Database

**Supabase Project:** `hltjnbdgbdjtjnxtbrzf`
**Region:** Singapore

**Tables (Phase 1):**
- `users` (for auth & roles)

**Tables (Coming in Phase 2+):**
- `customers`
- `channels`
- `rates`
- `accounts`
- `invoices`
- `deposits`

## ⚙️ Environment Variables

```
VITE_SUPABASE_URL=https://hltjnbdgbdjtjnxtbrzf.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_p7cZWggr0U422XwL-mBqMA_dQx5R6gk
```

## 🎨 Color Scheme (Tailwind)

```
Primary:   #3B82F6 (Blue)
Secondary: #10B981 (Green)
Danger:    #EF4444 (Red)
Warning:   #F59E0B (Amber)
```

## 📝 Role Permissions

| Feature | Staff | Admin |
|---------|-------|-------|
| Login | ✅ | ✅ |
| Dashboard | ✅ | ✅ |
| View Invoices | ✅ | ✅ |
| Create Invoice | ✅ | ✅ |
| Master Data | ❌ | ✅ |
| Reports | ❌ | ✅ |
| Settings | ❌ | ✅ |

## 🛠️ Tech Stack Summary

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Backend:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Hosting:** Vercel
- **Icons:** Lucide React

## 📞 Git Workflow

```bash
# New feature
git checkout -b feature/feature-name
git add .
git commit -m "Add feature"
git push origin feature/feature-name

# Create Pull Request on GitHub
# After review, merge to main
# Vercel auto deploys!
```

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Cannot find module" | `npm install` |
| Port 3000 already in use | `npm run dev -- --port 3001` |
| Login not working | Check `.env.local` has correct credentials |
| Blank page on Vercel | Check environment variables in Vercel dashboard |

## 📅 Phase Timeline

| Phase | Status | ETA |
|-------|--------|-----|
| Phase 1 | ✅ Done | Completed |
| Phase 2 | 🔄 Next | Week 2-3 |
| Phase 3 | ⏳ Pending | Week 4 |
| Phase 4 | ⏳ Pending | Week 5 |
| Phase 5-8 | ⏳ Pending | Week 6-8 |

## 🎯 Next Steps

1. ✅ Setup local development environment
2. ✅ Test login with demo accounts
3. ✅ Deploy to Vercel
4. ✅ Share Vercel URL with team
5. 👉 **Next:** Start Phase 2 (Master Data)

---

**Phase 1: Authentication System - COMPLETE ✅**

Ready for Phase 2? Say "Phase 2" to start development! 🚀
