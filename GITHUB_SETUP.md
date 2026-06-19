# 🐙 GitHub Setup - Copy-Paste Commands

## ⚠️ IMPORTANT: Create GitHub Repo First!

Sebelum jalankan commands di bawah:
1. Buka https://github.com/new
2. Nama: `jastip-system`
3. Visibility: PUBLIC
4. Create repository

---

## 📝 Commands to Run (Copy-Paste)

**Buka Terminal/Command Prompt di folder `jastip-system`:**

```bash
git init
git add .
git commit -m "Phase 1: Authentication System - Ready to Deploy"
git branch -M main
git remote add origin https://github.com/Yuniavanleeuwen/jastip-system.git
git push -u origin main
```

**That's it!** Code sekarang ada di GitHub ✅

---

## ✅ Expected Result

```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX)
...
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Jika muncul output seperti di atas → SUCCESS! ✅

---

## 🚀 Next: Deploy ke Vercel

Buka: https://vercel.com
1. Sign in dengan GitHub
2. Click "Add New" → "Project"
3. Pilih `jastip-system` repository
4. Add environment variables (2 biji)
5. Click "Deploy"

**DONE!** 🎉

---

**Butuh bantuan?** Ask me! 🆘
