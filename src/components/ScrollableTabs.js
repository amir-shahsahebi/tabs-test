import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const ScrollableTabsButtonPrevent = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabRef = React.useRef();
  React.useEffect(() => {
    console.log(revealRefs.current[value].getClientRects());
    // console.log(tabRef.current.getClientRects());
    // console.log(tabRef.current.getBoundingClientRect());
  }, [value]);
  const revealRefs = React.useRef([]);
  revealRefs.current = [];
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
      // console.log(revealRefs.current);
    }
  };
  return (
    <div className="bg-slate-200">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {tabs.map((tab, ind) => {
          return <Tab ref={addToRefs} key={ind} label={tab} />;
        })}
      </Tabs>
      <div className="bg-slate-400 text-blue-100 mt-10">
        {Math.random() * 100}
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

export default ScrollableTabsButtonPrevent;

const tabs = [
  "سلاااممم" + "10/10/1400",
  "نبتشسنبتنبتشب",
  "نبتشسنبتنبتشب",
  "نبتشسنبتنبتشب",
  "نبتشسنبتنبتشب",
  "نبتشسنبتنبتشب",
  "نبتشسنبتنبتشب",
  "ثبهخاثبهثابخنتثابن",
  "ثبهخاثبهثابخنتثابن",
  "ثبهخاثبهثابخنتثابن",
  "ثبهخاثبهثابخنتثابن",
  "ثبهخاثبهثابخنتثابن",
  "ثبهخاثبهثابخنتثابن",
  "بای",
  "بای",
  "بای",
  "بای",
  "بای",
  "بای",
  "بای",
  "بای",
  "بای",
  "بای",
  "بای",
  "بای",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
  "سیب",
];
