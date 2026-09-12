import { useState } from 'react'

function Announcements() {
  const [announcements] = useState([
    { id: 1, title: 'Imtixaanka Dhexe', message: 'Imtixaanka dhexe wuxuu bilaabmayaa 15-ka bisha. Dhammaan ardayda waa inay diyaar garoobaan.', date: '2024-01-10', priority: 'High' },
    { id: 2, title: 'Shirka Macallimiinta', message: 'Shirka macallimiinta wuxuu dhacayaa Jimcaha 2:00 PM. Dhammaan macallimiinta waa inay soo xaadiraan.', date: '2024-01-12', priority: 'Medium' },
    { id: 3, title: 'Fasalka 12-aad', message: 'Fasalka 12-aad wuxuu leeyahay imtixaan maanta. Fadlan soo gaadha waqtiga.', date: '2024-01-15', priority: 'High' },
    { id: 4, title: 'Ciidanka Cusub', message: 'Dugsiga waxaa lagu daray qalab cusub oo sayniska. Mahadsanid dhammaan taageerayaasha.', date: '2024-01-08', priority: 'Low' },
    { id: 5, title: 'Xiritaanka Dugsiga', message: 'Dugsiga wuxuu xirmayaa maalinta Khamiista sababtoo ah maalin fasax ah.', date: '2024-01-20', priority: 'Medium' },
  ])

  const priorityColor = {
    High: 'bg-red-100 text-red-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-green-100 text-green-800',
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📢 Announcements</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + New Announcement
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-bold text-gray-800">📌 {item.title}</h2>
              <span className={`text-xs px-2 py-1 rounded font-medium ${priorityColor[item.priority]}`}>
                {item.priority}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{item.message}</p>
            <p className="text-xs text-gray-400">📅 {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements
