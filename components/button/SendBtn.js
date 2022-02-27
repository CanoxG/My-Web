export default function SendBtn({ onSubmitted }) {
  return (
    <div className="p-1 w-full">
      {/* When ever We click the Button User Input Captured and Posted*/}
      <button
        onClick={onSubmitted}
        className="flex mx-auto text-amber-50 bg-black py-2 px-8
      rounded text-lg"
      >
        Send
      </button>
    </div>
  );
}
