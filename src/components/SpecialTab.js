import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SpecialTab = () => {
  const [x, setX] = useState(0);
  const [initialValue, setInitialValue] = useState(2);
  const [value, setValue] = useState(0);

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
  // useEffect(() => {

  // setInitialValue();
  // }, [])
  useEffect(() => {
    const { left, width } = revealRefs.current[value].getClientRects()[0];
    setInitialValue((c) => left + width / 2);
    console.log(revealRefs.current[value].getClientRects());
    // console.log(tabRef.current.getBoundingClientRect());
    // setX((c) => initialValue - windowSize / 2);
  }, [value]);
  const revealRefs = useRef([]);
  revealRefs.current = [];
  console.log(
    "windowSize:",
    windowSize,
    "initialValue:",
    initialValue,
    "x:",
    x
  );
  //   console.log(revealRefs.current);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
      // console.log(revealRefs.current);
    }
  };

  return (
    <div className="bg-slate-100">
      <motion.div
        className="flex justify-center overflow-auto snap-x  bg-slate-200"
        animate={{ x }}
        transition={{ type: "spring" }}
      >
        {tabs.map((item, index) => {
          return (
            <div
              ref={addToRefs}
              className="mx-2 bg-slate-300 p-1 rounded-8 snap-center"
              key={index}
              onClick={() => setValue(index)}
            >
              {item}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SpecialTab;

const tabs = [
  "دوشنبه",
  "دیروز",
  "امروز",
  "فردا",
  "جمعه",
  //   "نبتشسنبتنبتشب",
  //   "نبتشسنبتنبتشب",
  //   "نبتشسنبتنبتشب",
  //   "نبتشسنبتنبتشب",
  //   "ثبهخاثبهثابخنتثابن",
  //   "ثبهخاثبهثابخنتثابن",
  //   "ثبهخاثبهثابخنتثابن",
  //   "ثبهخاثبهثابخنتثابن",
  //   "ثبهخاثبهثابخنتثابن",
  //   "ثبهخاثبهثابخنتثابن",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "بای",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
  //   "سیب",
];
