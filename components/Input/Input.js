import React, {useCallback, useState} from "react";

export function Input() {
  const [state, setState] = useState([]);
  console.log(state);


  const handleName = useCallback((e) => {
    setState(e.target.value);
  }, []);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    console.log("Done");
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-center pt-5">
        <div className="px-1">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <form onSubmit={formSubmitted}>
            <input
              value={state}
              onChange={handleName}
              className="w-full sm:w-60 bg-gray-100 rounded border border-gray-300
            focus:border-indigo-500 text-base outline-none text-gray-700 py-1 leading-8
            transition-colors duration-200 ease-in-out"
            />
          </form>
        </div>
        <div className="px-1">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <form method={'post'}>
            <input
              type={'text'}
              name={'name'}
              className="w-full sm:w-60 bg-gray-100 rounded border border-gray-300
            focus:border-indigo-500 text-base outline-none text-gray-700 py-1 leading-8
            transition-colors duration-200 ease-in-out"
            />
          </form>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 pt-4 mx-auto">
        <label htmlFor="message" className="leading-6 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-100 transition rounded border border-gray-300
          focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1
          px-3 mb-2 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
    </>
  );
}
