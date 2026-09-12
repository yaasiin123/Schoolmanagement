import { useState } from 'react'

function Timetable() {
  const [schedule] = useState([
    { day: 'Isniin', time: '08:00', subject: 'Xisaabta', teacher: 'Cabdiraxmaan Xasan', class: '12-A' },
    { day: 'Isniin', time: '10:00', subject: 'Af-Soomaali', teacher: 'Faadumo Cali', class: '11-B' },
    { day: 'Talaado', time: '08:00', subject: 'Sayniska', teacher: 'Maxamed Cabdi', class: '10-A' },
    { day: 'Talaado', time: '10:00', subject: 'Ingiriisiga', teacher: 'Hodan Yuusuf', class: '12-A' },
    { day: 'Arbaco', time: '08:00', subject: 'Taariikhda', teacher: 'Cali Xaaji', class: '9-A' },
    { day: 'Arbaco', time: '10:00', subject: 'Juqraafiga', teacher: 'Cabdiraxmaan Xasan', class: '11-B' },
    { day: 'Khamiis', time: '08:00', subject: 'Xisaabta', teacher: 'Cabdiraxmaan Xasan', class: '12-B' },
    { day: 'Khamiis', time: '10:00', subject: 'Af-Soomaali', teacher: 'Faadumo Cali', class: '10-A' },
    { day: 'Jimco', time: '08:00', subject: 'Sayniska', teacher: 'Maxamed Cabdi', class: '11-A' },
  ])

  const dayColors = {
    Isniin: 'bg-blue-100 text-blue-800',
    Talaado: 'bg-green-100 text-green-800',
    Arbaco: 'bg-purple-100 text-purple-800',
    Khamiis: 'bg-orange-100 text-orange-800',
    Jimco: 'bg-pink-100 text-pink-800',
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📅 Timetable</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Schedule
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Day</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Time</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Subject</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Teacher</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Class</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded font-medium ${dayColors[item.day]}`}>
                    {item.day}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{item.time}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{item.subject}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{item.teacher}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{item.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Timetable
