import { useState } from 'react'

function Students() {
  const [students] = useState([
    { id: 1, name: 'Axmed Cali', class: '12-A', age: 17, phone: '061-1234567' },
    { id: 2, name: 'Fadumo Xasan', class: '11-B', age: 16, phone: '061-2345678' },
    { id: 3, name: 'Maxamed Yuusuf', class: '10-A', age: 15, phone: '061-3456789' },
    { id: 4, name: 'Hodan Cabdi', class: '12-B', age: 17, phone: '061-4567890' },
    { id: 5, name: 'Cali Warsame', class: '9-A', age: 14, phone: '061-5678901' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">👨‍🎓 Students</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Student
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Name</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Class</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Age</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Phone</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">{student.id}</td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{student.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{student.class}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{student.age}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students
