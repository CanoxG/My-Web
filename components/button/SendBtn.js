export default function SendBtn() {
  return (
    <div className="p-2 w-full">
      <button
        onClick={((e) => {
          console.log(e.target)
        })}
        className="flex mx-auto text-amber-50 bg-black py-2 px-8
      rounded text-lg"
      >
        Send
      </button>
    </div>
  );
}
