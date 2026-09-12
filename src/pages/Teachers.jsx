import { useState } from 'react'

function Teachers() {
  const [teachers] = useState([
    { id: 1, name: 'Cabdiraxmaan Xasan', subject: 'Xisaabta', phone: '061-1111111', experience: '10 sano' },
    { id: 2, name: 'Faadumo Cali', subject: 'Af-Soomaali', phone: '061-2222222', experience: '8 sano' },
    { id: 3, name: 'Maxamed Cabdi', subject: 'Sayniska', phone: '061-3333333', experience: '12 sano' },
    { id: 4, name: 'Hodan Yuusuf', subject: 'Ingiriisiga', phone: '061-4444444', experience: '6 sano' },
    { id: 5, name: 'Cali Xaaji', subject: 'Taariikhda', phone: '061-5555555', experience: '15 sano' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">👩‍🏫 Teachers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Teacher
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Name</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Subject</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Phone</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Experience</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">{teacher.id}</td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{teacher.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{teacher.subject}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{teacher.phone}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{teacher.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Teachers
