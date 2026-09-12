import { useState } from 'react'

function Results() {
  const [results] = useState([
    { id: 1, student: 'Axmed Cali', class: '12-A', subject: 'Xisaabta', marks: 85, grade: 'A' },
    { id: 2, student: 'Fadumo Xasan', class: '11-B', subject: 'Af-Soomaali', marks: 92, grade: 'A+' },
    { id: 3, student: 'Maxamed Yuusuf', class: '10-A', subject: 'Sayniska', marks: 65, grade: 'C' },
    { id: 4, student: 'Hodan Cabdi', class: '12-B', subject: 'Ingiriisiga', marks: 78, grade: 'B' },
    { id: 5, student: 'Cali Warsame', class: '9-A', subject: 'Taariikhda', marks: 55, grade: 'D' },
    { id: 6, student: 'Sahra Cabdi', class: '12-A', subject: 'Juqraafiga', marks: 88, grade: 'A' },
  ])

  const gradeColor = {
    'A+': 'bg-green-100 text-green-800',
    'A': 'bg-green-100 text-green-800',
    'B': 'bg-blue-100 text-blue-800',
    'C': 'bg-yellow-100 text-yellow-800',
    'D': 'bg-orange-100 text-orange-800',
    'F': 'bg-red-100 text-red-800',
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📊 Exams & Results</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Result
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Student</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Class</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Subject</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Marks</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Grade</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">{result.id}</td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{result.student}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{result.class}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{result.subject}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{result.marks}/100</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded font-bold ${gradeColor[result.grade]}`}>
                    {result.grade}
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

export default Results
