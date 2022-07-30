import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SpecialTab = () => {
  const [x, setX] = useState(0);
  const [value, setValue] = useState(Math.floor(tabs2.length / 2));

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const { right, width } = getRelativeClientRect(revealRefs.current[value]);
    setX((c) => right + width / 2 - windowSize / 2);
    // console.log(getRelativeClientRect(revealRefs.current[value]));
    // console.log(
    //   "right + width / 2 =",
    //   right + width / 2,
    //   "windowSize / 2 =",
    //   windowSize / 2,
    //   "X =",
    //   right + width / 2 - windowSize / 2
    // );
  }, [value]);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  function getRelativeClientRect(el) {
    const rect = el.getBoundingClientRect(),
      parentRect = el.offsetParent.getBoundingClientRect();
    return {
      bottom: parentRect.bottom - rect.bottom,
      height: rect.height,
      left: rect.left - parentRect.left,
      right: parentRect.right - rect.right,
      top: rect.top - parentRect.top,
      width: rect.width,
    };
  }

  return (
    <div className=" bg-slate-100  z-10 -mt-12  ">
      <div className="overflow-x-auto">
        <motion.div
          className="flex justify-center snap-x bg-slate-200"
          animate={{ x }}
          transition={{ type: "spring" }}
        >
          {tabs2.map((item, index) => {
            return (
              <div
                ref={addToRefs}
                className="mx-2 px-3 bg-slate-300  rounded-8 snap-center"
                key={index}
                onClick={() => setValue(index)}
                style={{
                  borderBottom: value === index ? "solid blue 2px" : "unset",
                }}
              >
                {item}
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="bg-slate-200 text-blue-100">{Math.random() * 100}</div>
      <div className="bg-slate-600 text-red-100">{Math.random() * 100}</div>
      <div className="bg-slate-700 text-green-100">{Math.random() * 100}</div>
      <div className="bg-slate-800 text-blue-100">{Math.random() * 100}</div>
      <div className="bg-slate-900 text-black-100">{Math.random() * 100}</div>
      <div className="bg-slate-100 text-blue-100">{Math.random() * 100}</div>
      <div className="bg-slate-200 text-white-100">{Math.random() * 100}</div>
      <div className="bg-slate-300 text-blue-100">{Math.random() * 100}</div>
    </div>
  );
};

export default SpecialTab;

const tabs1 = ["دوشنبه", "دیروز", "امروز", "فردا", "جمعه"];
const tabs2 = [
  "جمعه",
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "دیروز",
  "امروز",
  "فردا",
  "جمعه",
  "شنبه",
  "یکشنبه",
  "دوشنبه",
];
