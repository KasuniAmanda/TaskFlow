function FormInput({label, type, placeholder}) {

  return (

    <div className="mb-4">

      <label className="block text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>

  )

}

export default FormInput;