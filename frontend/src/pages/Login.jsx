import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";


function Login(){

return(

<div className="flex justify-center items-center min-h-screen bg-gray-100">


<div className="bg-white p-8 rounded-lg shadow-md w-96">


<h1 className="text-3xl font-bold mb-6 text-center">
Login
</h1>


<FormInput
label="Email"
type="email"
placeholder="Enter email"
/>


<FormInput
label="Password"
type="password"
placeholder="Enter password"
/>


<button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">

Login

</button>

<p className="mt-4 text-center">

Don't have an account?

<Link 
to="/register"
className="text-blue-600 ml-2"
>
Register
</Link>

</p>


</div>


</div>

)

}


export default Login;