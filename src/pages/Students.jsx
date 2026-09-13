import { useState } from 'react'

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Axmed Cali', class: '12-A', age: 17, phone: '061-1234567' },
    { id: 2, name: 'Fadumo Xasan', class: '11-B', age: 16, phone: '061-2345678' },
    { id: 3, name: 'Maxamed Yuusuf', class: '10-A', age: 15, phone: '061-3456789' },
    { id: 4, name: 'Hodan Cabdi', class: '12-B', age: 17, phone: '061-4567890' },
    { id: 5, name: 'Cali Warsame', class: '9-A', age: 14, phone: '061-5678901' },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    age: '',
    phone: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.class || !formData.age || !formData.phone) {
      alert('Fadlan buuxi dhammaan meelaha')
      return
    }
    const newStudent = {
      id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
      name: formData.name,
      class: formData.class,
      age: formData.age,
      phone: formData.phone,
    }
    setStudents([...students, newStudent])
    setFormData({ name: '', class: '', age: '', phone: '' })
    setShowForm(false)
    alert('Ardayga cusub waa lagu daray!')
  }

  const handleDelete = (id) => {
    if (window.confirm('Ma hubtaa inaad tirtirto ardaygan?')) {
      setStudents(students.filter(s => s.id !== id))
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">👨‍🎓 Students</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {showForm ? '✖ Cancel' : '+ Add Student'}
        </button>
      </div>

      {/* FORM YAR — INLINE */}
      {showForm && (
        <div className="bg-white p-5 rounded-lg shadow mb-6 border-l-4 border-blue-600">
          <h2 className="text-lg font-bold text-gray-800 mb-4">➕ Add New Student</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Axmed Cali"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Class</label>
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleChange}
                placeholder="12-A"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="16"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="061-1234567"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                💾 Save
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">ID</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Name</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Class</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Age</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Phone</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-400">
                  Ma jiro arday — ku dar mid cusub
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">{student.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">{student.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{student.class}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{student.age}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{student.phone}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs hover:bg-red-200"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students
