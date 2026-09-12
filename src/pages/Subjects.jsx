import { useState } from 'react'

function Subjects() {
  const [subjects] = useState([
    { id: 1, name: 'Xisaabta', code: 'MATH101', teacher: 'Cabdiraxmaan Xasan', classes: '12-A, 12-B' },
    { id: 2, name: 'Af-Soomaali', code: 'SOM101', teacher: 'Faadumo Cali', classes: '11-A, 11-B' },
    { id: 3, name: 'Sayniska', code: 'SCI101', teacher: 'Maxamed Cabdi', classes: '10-A, 9-A' },
    { id: 4, name: 'Ingiriisiga', code: 'ENG101', teacher: 'Hodan Yuusuf', classes: '12-A, 11-A' },
    { id: 5, name: 'Taariikhda', code: 'HIS101', teacher: 'Cali Xaaji', classes: '10-A, 9-A' },
    { id: 6, name: 'Juqraafiga', code: 'GEO101', teacher: 'Cabdiraxmaan Xasan', classes: '11-B, 10-A' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📖 Subjects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Subject
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <div key={subject.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-bold text-purple-800">{subject.name}</h2>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                {subject.code}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>👩‍🏫 {subject.teacher}</p>
              <p>📚 {subject.classes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subjects
