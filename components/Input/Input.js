export function Input({
  onNameChange,
  onEmailChange,
  onMessageChange,
  fullName,
  email,
  msg,
}) {
  return (
    <>
      <div className="flex flex-col sm:justify-center pt-4">
        <div className=" flex justify-center px-1 pt-4">
          <label
            htmlFor="name"
            className="block leading-7 text-sm text-gray-600"
          ></label>
          <input
            onChange={onNameChange}
            value={fullName}
            type={"text"}
            placeholder={'Full Name'}
            className="w-full p-3 md:w-4/5  lg:w-3/5 bg-gray-100 rounded border border-gray-300
            focus:border-indigo-500 text-base outline-none text-gray-700 py-1 leading-8
            transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="flex justify-center px-1 pt-4">
          <label
            htmlFor="email"
            className="block leading-7 text-sm text-gray-600"
          ></label>
          <input
            onChange={onEmailChange}
            value={email}
            type={"email"}
            placeholder={'E-mail'}
            className="w-full p-3 md:w-4/5 lg:w-3/5 bg-gray-100 rounded border border-gray-300
            focus:border-indigo-500 text-base outline-none text-gray-700 py-1 leading-8
            transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
        <label
          htmlFor="message"
          className="leading-6 text-sm text-gray-600"
        ></label>

      <div className="w-full md:w-4/5 lg:w-3/5 pt-4 mx-auto">
        <textarea
          onChange={onMessageChange}
          value={msg}
          id="message"
          name="message"
          placeholder={'Your Message'}
          className="w-full bg-gray-100 transition rounded border border-gray-300
          focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1
          px-3 mb-2 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
    </>
  );
}
