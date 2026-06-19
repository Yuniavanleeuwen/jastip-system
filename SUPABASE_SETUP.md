# Supabase Setup Guide - Phase 1

## Database Schema Setup

### Step 1: Create Users Table

Buka Supabase Dashboard → SQL Editor → Copy-paste query ini:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'staff' CHECK (role IN ('staff', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index untuk fast lookup
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Create trigger untuk update timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at_trigger
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();
```

### Step 2: Enable RLS (Row Level Security)

```sql
-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: Users dapat melihat data mereka sendiri
CREATE POLICY "Users can view own data"
ON users FOR SELECT
USING (auth.uid() = id);

-- Policy: Users dapat update data mereka sendiri
CREATE POLICY "Users can update own data"
ON users FOR UPDATE
USING (auth.uid() = id);

-- Policy: Admin dapat melihat semua data
CREATE POLICY "Admin can view all data"
ON users FOR SELECT
USING (
  (SELECT role FROM users WHERE id = auth.uid()) = 'admin'
);
```

### Step 3: Create Demo Users (OPTIONAL)

1. **Via Supabase Dashboard (Recommended):**
   - Go to Authentication → Users
   - Click "Add User"
   - Email: `admin@jastip.com`
   - Password: `admin123`
   - Click Create User
   - Repeat untuk `staff@jastip.com` dengan password `staff123`

2. **Via SQL (Alternative):**
   ```sql
   -- Note: Ini hanya contoh, password hashing di Supabase sudah otomatis via UI
   INSERT INTO auth.users (email, email_confirmed_at, raw_user_meta_data)
   VALUES 
     ('admin@jastip.com', NOW(), '{}'),
     ('staff@jastip.com', NOW(), '{}')
   ON CONFLICT DO NOTHING;

   -- Insert ke users table
   INSERT INTO users (id, email, name, role)
   SELECT id, email, split_part(email, '@', 1), 
     CASE 
       WHEN email = 'admin@jastip.com' THEN 'admin' 
       ELSE 'staff' 
     END
   FROM auth.users 
   WHERE email IN ('admin@jastip.com', 'staff@jastip.com')
   ON CONFLICT DO NOTHING;
   ```

### Step 4: Setup Authentication Redirects

Buka Supabase Dashboard → Project Settings → Authentication:

1. **Authorized Redirect URLs:**
   - Add: `http://localhost:3000/`
   - Add: `http://localhost:3000/dashboard`
   - Add: `https://your-vercel-domain.vercel.app/` (nanti saat deploy)
   - Add: `https://your-vercel-domain.vercel.app/dashboard` (nanti saat deploy)

2. **Disable Email Confirmation (for development):**
   - Go to Authentication → Settings
   - Under "Email Auth", set "Confirm email" to OFF

## Testing Connection

Setelah setup selesai, test di aplikasi dengan login:

**Admin Account:**
- Email: `admin@jastip.com`
- Password: `admin123`

**Staff Account:**
- Email: `staff@jastip.com`
- Password: `staff123`

Jika berhasil:
- Admin akan melihat semua menu
- Staff akan melihat menu terbatas

## Troubleshooting

### "User not found" saat login
**Solution:** Pastikan user sudah dibuat di Authentication → Users section

### "Operator does not exist" error
**Solution:** Pastikan SQL query sudah di-run dengan benar. Cek table sudah ada:
```sql
SELECT * FROM users;
```

### RLS policy error
**Solution:** Jika error muncul saat query, cek:
```sql
SELECT * FROM pg_policies WHERE tablename = 'users';
```

## Next Steps

Setelah Phase 1 berhasil (login working), Phase 2 akan menambah:
- `customers` table
- `channels` table (untuk Bangkok, China, dll)
- `rates` table (untuk currency rates)
- `accounts` table (untuk bank accounts)

---

**Phase 1 Database Setup: ✅ COMPLETE**
