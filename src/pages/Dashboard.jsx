import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { LogOut, BarChart3, Users, Wallet, FileText } from 'lucide-react'

export default function Dashboard() {
  const { user, userRole, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Jastip System</h1>
            <p className="text-gray-600">Manajemen Jastip Internasional</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Welcome,</p>
              <p className="font-semibold text-gray-900">{user?.email}</p>
              <p className="text-xs text-gray-500 capitalize">Role: {userRole}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            <a href="#" className="px-4 py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
              Dashboard
            </a>
            <a href="/customers" className="px-4 py-4 text-gray-600">👥 Customers</a>
            <a href="#" className="px-4 py-4 text-gray-600 hover:text-gray-900">
              Faktur Penjualan
            </a>
            <a href="#" className="px-4 py-4 text-gray-600 hover:text-gray-900">
              Faktur Pembelian
            </a>
            <a href="#" className="px-4 py-4 text-gray-600 hover:text-gray-900">
              Deposit & Refund
            </a>
            {userRole === 'admin' && (
              <>
                <a href="#" className="px-4 py-4 text-gray-600 hover:text-gray-900">
                  Master Data
                </a>
                <a href="#" className="px-4 py-4 text-gray-600 hover:text-gray-900">
                  Laporan
                </a>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Status Alert */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
          <p className="text-green-800">
            ✅ <strong>Phase 1 Complete!</strong> Login & Authentication system berhasil di-setup.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Penjualan Hari Ini</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">Rp 0</p>
              </div>
              <FileText className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Piutang</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">Rp 0</p>
              </div>
              <Wallet className="w-12 h-12 text-red-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Customer</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              </div>
              <Users className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Kurs Hari Ini</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
              </div>
              <BarChart3 className="w-12 h-12 text-purple-500 opacity-20" />
            </div>
          </div>
        </div>

        {/* Phase 1 Info */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎉 Phase 1 - Authentication Berhasil!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ Fitur Phase 1:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Login dengan Email & Password</li>
                <li>✓ Role-based Access (Staff vs Admin)</li>
                <li>✓ Session Management</li>
                <li>✓ Auto-redirect sesuai role</li>
                <li>✓ Logout functionality</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Next Phase (Phase 2):</h3>
              <ul className="space-y-2 text-gray-700">
                <li>→ Master Data: Customer Management</li>
                <li>→ Channel & Currency Setup</li>
                <li>→ Bank Account Configuration</li>
                <li>→ Settings & Logo Upload</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Pro Tip:</strong> Phase 1 setup sudah selesai. Sekarang tim Anda bisa login dengan email dan password. 
              Role "admin" akan melihat menu tambahan untuk Master Data & Laporan.
            </p>
          </div>
        </div>

        {userRole === 'admin' && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">🔐 Admin Features Unlocked</h3>
            <p className="text-yellow-800">
              Anda memiliki akses Admin. Menu tambahan akan muncul setelah Phase 2 selesai untuk mengelola Master Data, 
              Beban, dan Laporan Laba Rugi.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
