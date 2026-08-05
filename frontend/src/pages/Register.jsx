import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";

function Register(){

return(

<div className="flex justify-center items-center min-h-screen bg-gray-100">


<div className="bg-white p-8 rounded-lg shadow-md w-96">


<h1 className="text-3xl font-bold mb-6 text-center">
Create Account
</h1>


<FormInput
label="Name"
type="text"
placeholder="Enter name"
/>


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

Register

</button>

<p className="mt-4 text-center">

Already have an account?

<Link 
to="/login"
className="text-blue-600 ml-2"
>
Login
</Link>

</p>


</div>


</div>

)

}


export default Register;