export function Input({ type, id, name }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center pt-5">
      <div className='px-1'>
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <form>
          <input
            type={type}
            id={id}
            name={name}
            className="w-full sm:w-60 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500
          text-base outline-none text-gray-700 py-1 leading-8
          transition-colors duration-200 ease-in-out"
          />
        </form>
      </div>
      <div className='px-1'>
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <form>
          <input
            type={type}
            id={id}
            name={name}
            className="w-full sm:w-60 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500
          text-base outline-none text-gray-700 py-1 leading-8
          transition-colors duration-200 ease-in-out"
          />
        </form>
      </div>
    </div>
  );
}
