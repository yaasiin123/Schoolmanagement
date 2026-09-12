import { useState } from 'react'

function Classes() {
  const [classes] = useState([
    { id: 1, name: '12-A', students: 32, teacher: 'Cabdiraxmaan Xasan', room: 'A1' },
    { id: 2, name: '12-B', students: 28, teacher: 'Faadumo Cali', room: 'A2' },
    { id: 3, name: '11-A', students: 35, teacher: 'Maxamed Cabdi', room: 'B1' },
    { id: 4, name: '11-B', students: 30, teacher: 'Hodan Yuusuf', room: 'B2' },
    { id: 5, name: '10-A', students: 33, teacher: 'Cali Xaaji', room: 'C1' },
    { id: 6, name: '9-A', students: 29, teacher: 'Cabdiraxmaan Xasan', room: 'C2' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📚 Classes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Class
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cls) => (
          <div key={cls.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-bold text-blue-800">{cls.name}</h2>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {cls.room}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>👨‍🎓 <span className="font-medium">{cls.students}</span> arday</p>
              <p>👩‍🏫 {cls.teacher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Classes
