const CommonBtn = ({ text, selected, setSelected  , setTask , task}) => {
  const isActive = selected === text;
  return (
    <button
      onClick={() => setSelected(text)}
      className={`
        py-1.5 px-4 rounded text-sm text-white shadow cursor-pointer
        transition-all duration-300
        ${isActive ? "scale-110 ring-2 ring-black/30" : "scale-100"}
        ${
          text === "HIGH"
            ? "bg-red-500"
            : text === "MEDIUM"
            ? "bg-blue-500"
            : "bg-yellow-500"
        }
      `}
    >
      {text}
    </button>
  );
};


export default CommonBtn