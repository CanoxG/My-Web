export default function Textarea() {

  return (
    <div className="w-full lg:w-3/5 pt-4 mx-auto">
      <label htmlFor="message" className="leading-6 text-sm text-gray-600">
        Message
      </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-100 rounded border border-gray-300
          focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1
          px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
    </div>
  )
}