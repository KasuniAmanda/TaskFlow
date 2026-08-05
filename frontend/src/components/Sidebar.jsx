function Sidebar(){

  return(

    <aside className="w-64 bg-gray-900 min-h-screen text-white p-6">

      <ul className="space-y-4">

        <li className="hover:text-blue-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Projects
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Tasks
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Profile
        </li>

      </ul>

    </aside>

  )

}

export default Sidebar;