function Dashboard() {
  const stats = [
    { label: 'Students', value: '245', icon: '👨‍🎓', color: 'bg-blue-500' },
    { label: 'Teachers', value: '18', icon: '👩‍🏫', color: 'bg-green-500' },
    { label: 'Classes', value: '12', icon: '📚', color: 'bg-purple-500' },
    { label: 'Subjects', value: '15', icon: '📖', color: 'bg-orange-500' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <p className="text-gray-600 mb-8">Ku soo dhawoow Nidaamka Maamulka Dugsiga Yasin</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-lg shadow">
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-3`}>
              {stat.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📢 Ogeysiisyada</h2>
        <ul className="space-y-2 text-gray-600">
          <li>• Imtixaanka dhexe wuxuu bilaabmayaa 15-ka bisha</li>
          <li>• Shirka macallimiinta wuxuu dhacayaa Jimcaha</li>
          <li>• Fasalka 12-aad wuxuu leeyahay imtixaan maanta</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
