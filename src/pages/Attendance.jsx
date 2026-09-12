import { useState } from 'react'

function Attendance() {
  const [students] = useState([
    { id: 1, name: 'Axmed Cali', class: '12-A', status: 'Present' },
    { id: 2, name: 'Fadumo Xasan', class: '11-B', status: 'Present' },
    { id: 3, name: 'Maxamed Yuusuf', class: '10-A', status: 'Absent' },
    { id: 4, name: 'Hodan Cabdi', class: '12-B', status: 'Present' },
    { id: 5, name: 'Cali Warsame', class: '9-A', status: 'Late' },
    { id: 6, name: 'Sahra Cabdi', class: '12-A', status: 'Present' },
    { id: 7, name: 'Yuusuf Xasan', class: '11-A', status: 'Absent' },
  ])

  const statusColor = {
    Present: 'bg-green-100 text-green-800',
    Absent: 'bg-red-100 text-red-800',
    Late: 'bg-yellow-100 text-yellow-800',
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📝 Attendance</h1>
        <input
          type="date"
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          defaultValue="2024-01-15"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Name</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Class</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">{student.id}</td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{student.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{student.class}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded ${statusColor[student.status]}`}>
                    {student.status}
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

export default Attendance
