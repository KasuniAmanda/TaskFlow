import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MainLayout from "./layouts/MainLayout";


function App(){

return(

<BrowserRouter>

<Routes>

<Route 
path="/" 
element={
<MainLayout>
<Dashboard/>
</MainLayout>
}
/>


<Route path="/login" element={<Login/>}/>


<Route path="/register" element={<Register/>}/>


</Routes>

</BrowserRouter>

)

}


export default App;