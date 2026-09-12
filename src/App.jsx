import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Classes from './pages/Classes'
import Subjects from './pages/Subjects'
import Attendance from './pages/Attendance'
import Results from './pages/Results'
import Fees from './pages/Fees'
import Timetable from './pages/Timetable'
import Announcements from './pages/Announcements'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/results" element={<Results />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
