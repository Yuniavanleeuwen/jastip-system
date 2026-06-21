import { useState, useEffect } from 'react';
import { customerService } from '../services/supabaseService';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', city: '' });

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const data = await customerService.getAll();
      setCustomers(data);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    try {
      await customerService.create(formData);
      setFormData({ name: '', phone: '', address: '', city: '' });
      setShowForm(false);
      loadCustomers();
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">👥 Customers</h1>
          <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
            + Add Customer
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : customers.length === 0 ? (
          <p className="text-center text-gray-500">No customers yet</p>
        ) : (
          <div className="bg-white rounded shadow">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Phone</th>
                  <th className="px-6 py-3 text-left">City</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c) => (
                  <tr key={c.id} className="border-t">
                    <td className="px-6 py-3">{c.name}</td>
                    <td className="px-6 py-3">{c.phone || '-'}</td>
                    <td className="px-6 py-3">{c.city || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}git add .
git commit -m "Create CustomersPage.jsx"
git push
