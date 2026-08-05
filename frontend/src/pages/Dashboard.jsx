function Dashboard(){

  return(

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>


      <div className="grid grid-cols-3 gap-6">


        <div className="bg-white p-6 rounded-lg shadow">

          <h2 className="text-gray-500">
            Projects
          </h2>

          <p className="text-3xl font-bold">
            12
          </p>

        </div>


        <div className="bg-white p-6 rounded-lg shadow">

          <h2 className="text-gray-500">
            Tasks
          </h2>

          <p className="text-3xl font-bold">
            45
          </p>

        </div>


        <div className="bg-white p-6 rounded-lg shadow">

          <h2 className="text-gray-500">
            Completed
          </h2>

          <p className="text-3xl font-bold">
            30
          </p>

        </div>


      </div>


    </div>

  )

}

export default Dashboard;