# Jastip System - Manajemen Jastip Internasional

Website management system untuk jastip internasional dengan support multi-negara dan multi-mata uang.

## 📋 Status Phase 1: ✅ COMPLETE

### Fitur Phase 1:
- ✅ Login/Registration dengan Email & Password
- ✅ Role-based Access Control (Staff vs Admin)
- ✅ Session Management
- ✅ Auto-redirect sesuai role
- ✅ Logout functionality

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 16+ installed
- GitHub account
- Vercel account (untuk deployment)

### 2. Setup Local Development

```bash
# Clone the repository
git clone https://github.com/Yuniavanleeuwen/jastip-system.git
cd jastip-system

# Install dependencies
npm install

# Create .env.local file (sudah ada, tapi cek isinya)
# VITE_SUPABASE_URL=https://hltjnbdgbdjtjnxtbrzf.supabase.co
# VITE_SUPABASE_ANON_KEY=sb_publishable_p7cZWggr0U422XwL-mBqMA_dQx5R6gk

# Start development server
npm run dev
```

Aplikasi akan buka di `http://localhost:3000`

### 3. Setup Database di Supabase

Saat ini, Supabase project sudah terhubung. Kita perlu setup tabel `users`:

1. Buka https://supabase.com/dashboard
2. Pilih project `jastip-system` (atau nama yang Anda setup)
3. Go to SQL Editor
4. Run query berikut:

```sql
-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'staff' CHECK (role IN ('staff', 'admin')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index
CREATE INDEX idx_users_email ON users(email);

-- Add demo users
INSERT INTO auth.users (email, password_hash, email_confirmed_at)
VALUES 
  ('staff@jastip.com', crypt('staff123', gen_salt('bf')), NOW()),
  ('admin@jastip.com', crypt('admin123', gen_salt('bf')), NOW())
ON CONFLICT DO NOTHING;

INSERT INTO users (id, email, name, role)
SELECT id, email, split_part(email, '@', 1), 
  CASE WHEN email = 'admin@jastip.com' THEN 'admin' ELSE 'staff' END
FROM auth.users 
WHERE email IN ('staff@jastip.com', 'admin@jastip.com')
ON CONFLICT DO NOTHING;
```

### 4. Test Login

**Demo Credentials:**
- Email: `admin@jastip.com`
- Password: `admin123`

atau

- Email: `staff@jastip.com`
- Password: `staff123`

## 📁 Project Structure

```
jastip-system/
├── src/
│   ├── pages/
│   │   ├── Login.jsx          # Login page
│   │   └── Dashboard.jsx      # Dashboard
│   ├── components/
│   │   └── ProtectedRoute.jsx # Route protection
│   ├── context/
│   │   └── AuthContext.jsx    # Auth state management
│   ├── config/
│   │   └── supabase.js        # Supabase client
│   ├── App.jsx                # Main routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js            # Vite config
├── tailwind.config.js        # Tailwind config
├── postcss.config.js         # PostCSS config
└── .env.local                # Environment variables
```

## 📦 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Backend:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Hosting:** Vercel

## 🔄 Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Phase 1 complete"

# Add remote (replace with your repo)
git remote add origin https://github.com/Yuniavanleeuwen/jastip-system.git

# Push
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Import repository `jastip-system`
4. Add Environment Variables:
   - `VITE_SUPABASE_URL`: `https://hltjnbdgbdjtjnxtbrzf.supabase.co`
   - `VITE_SUPABASE_ANON_KEY`: `sb_publishable_p7cZWggr0U422XwL-mBqMA_dQx5R6gk`
5. Click "Deploy"

Aplikasi akan live dalam 2-3 menit!

## 📝 Next Phases

### Phase 2: Master Data
- Customer management
- Channel & Currency setup
- Bank account configuration
- Settings & Logo upload

### Phase 3: Purchase Invoices
- Multi-item invoicing
- Automatic currency conversion
- Internal invoice tracking

### Phase 4: Sales Invoices
- Customer-facing invoices
- PDF generation
- Invoice numbering system

### Phase 5: Deposit & Refund
- Customer balance management
- Deposit tracking
- Refund processing

### Phase 6: Dashboard
- Summary cards
- Daily & monthly charts
- Real-time metrics

### Phase 7: Financial Reports
- Profit & Loss statement
- Expense tracking
- Export to PDF

### Phase 8: PWA & Optimization
- Mobile installation support
- Offline functionality
- UI polish & performance

## 🐛 Troubleshooting

### "Cannot find module '@supabase/supabase-js'"
```bash
npm install @supabase/supabase-js
```

### Login tidak bekerja
- Pastikan `.env.local` file ada dan berisi credentials yang benar
- Check apakah users table sudah dibuat di Supabase
- Restart dev server: `npm run dev`

### Vercel deployment error
- Pastikan semua environment variables sudah di-set di Vercel dashboard
- Check console logs: `vercel logs`

## 📞 Support

Jika ada issue atau pertanyaan, hubungi developer!

---

**Created with ❤️ for Jastip System**
**Last Updated:** June 19, 2026
