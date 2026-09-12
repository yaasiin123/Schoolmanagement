import { NavLink } from 'react-router-dom'

const menuItems = [
  { path: '/', label: 'Dashboard', icon: '🏠' },
  { path: '/students', label: 'Students', icon: '👨‍🎓' },
  { path: '/teachers', label: 'Teachers', icon: '👩‍🏫' },
  { path: '/classes', label: 'Classes', icon: '📚' },
  { path: '/subjects', label: 'Subjects', icon: '📖' },
  { path: '/attendance', label: 'Attendance', icon: '📝' },
  { path: '/results', label: 'Exams & Results', icon: '📊' },
  { path: '/fees', label: 'Fees', icon: '💰' },
  { path: '/timetable', label: 'Timetable', icon: '📅' },
  { path: '/announcements', label: 'Announcements', icon: '📢' },
  { path: '/settings', label: 'Settings', icon: '⚙️' },
]

function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">🎓 Yasin School</h1>
        <p className="text-xs text-blue-200">Management System</p>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-800'
              }`
            }
          >
            <span>{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
