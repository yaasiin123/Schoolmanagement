import { useState } from 'react'

function Fees() {
  const [fees] = useState([
    { id: 1, student: 'Axmed Cali', class: '12-A', amount: 150, paid: 150, status: 'Paid' },
    { id: 2, student: 'Fadumo Xasan', class: '11-B', amount: 150, paid: 100, status: 'Partial' },
    { id: 3, student: 'Maxamed Yuusuf', class: '10-A', amount: 120, paid: 0, status: 'Unpaid' },
    { id: 4, student: 'Hodan Cabdi', class: '12-B', amount: 150, paid: 150, status: 'Paid' },
    { id: 5, student: 'Cali Warsame', class: '9-A', amount: 100, paid: 50, status: 'Partial' },
    { id: 6, student: 'Sahra Cabdi', class: '12-A', amount: 150, paid: 0, status: 'Unpaid' },
  ])

  const statusColor = {
    Paid: 'bg-green-100 text-green-800',
    Partial: 'bg-yellow-100 text-yellow-800',
    Unpaid: 'bg-red-100 text-red-800',
  }

  const totalCollected = fees.reduce((sum, f) => sum + f.paid, 0)
  const totalExpected = fees.reduce((sum, f) => sum + f.amount, 0)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">💰 Fees</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Record Payment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Expected</p>
          <p className="text-2xl font-bold text-gray-800">${totalExpected}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Collected</p>
          <p className="text-2xl font-bold text-green-600">${totalCollected}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <p className="text-sm text-gray-500">Outstanding</p>
          <p className="text-2xl font-bold text-red-600">${totalExpected - totalCollected}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Student</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Class</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Amount</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Paid</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">{fee.id}</td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{fee.student}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{fee.class}</td>
                <td className="px-4 py-3 text-sm text-gray-700">${fee.amount}</td>
                <td className="px-4 py-3 text-sm text-gray-700">${fee.paid}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded ${statusColor[fee.status]}`}>
                    {fee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fees
