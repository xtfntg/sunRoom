import annotations from "../annotations.json";
const Buttons = ({ gotoAnnotation }) => {
  return (
    <div className="absolute top-10">
      <ul className="p-0 list-none">
        {annotations.map((a, i) => {
          return (
            <li key={i}>
              <button
                key={i}
                className="w-28 h-8 bg-black bg-opacity-50 text-sm m-2 cursor-pointer text-white font-monospace border border-black rounded text-left pl-2"
                onClick={() => gotoAnnotation(i)}
              >
                {a.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Buttons;
