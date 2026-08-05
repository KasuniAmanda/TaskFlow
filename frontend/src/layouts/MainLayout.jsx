import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


function MainLayout({children}){

  return(

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div classname="flex">

        <Sidebar />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>

  )

}


export default MainLayout;