import { useState } from "react";
import { Html } from "@react-three/drei";
import annotations from "../annotations.json";

const Annotation = ({ selected, gotoAnnotation }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    gotoAnnotation(index); // Ensure this function still works
  };

  return (
    <>
      {annotations.map((a, i) => {
        const isActive = i === activeIndex;

        return (
          <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
            <svg
              height="34"
              width="100"
              transform="translate(-16 -16)"
              style={{ cursor: "pointer", opacity: isActive ? 1 : 0.3 }}
              onClick={() => handleClick(i)}
            >
              <circle
                className="stroke-white bg-black bg-opacity-50"
                cx="17"
                cy="17"
                r="16"
                strokeWidth="2"
              />
              <text
                className="fill-white text-sm font-monospace pointer-events-none"
                x="12"
                y="22"
              >
                {i + 1}
              </text>
            </svg>
            {a.description && i === selected && (
              <div
                id={"desc_" + i}
                className="w-40 h-auto bg-black bg-opacity-50 text-sm m-2 px-1 cursor-pointer text-white font-monospace border border-white rounded flex items-center justify-start"
                style={{ zIndex: 1000 }} // Ensure this is on top
                dangerouslySetInnerHTML={{ __html: a.description }}
              />
            )}
          </Html>
        );
      })}
    </>
  );
};

export default Annotation;
