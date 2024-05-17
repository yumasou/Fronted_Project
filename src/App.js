import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Body from "./Components/Layout/Body";
import Footer from "./Components/Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./Components/counter/modeSlice";
function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.data);
  const night = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
    >
      <path
        fill-rule="evenodd"
        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
        clip-rule="evenodd"
      />
    </svg>
  );

  const day = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
  return (
    <div className={mode}>
      <div className=" dark:bg-slate-800 dark:text-slate-200 light:text-slate-800 light:bg-slate-200">
        <BrowserRouter>
          <Body />
        </BrowserRouter>
        <span 
          onClick={() => dispatch(changeMode())}
          className=" cursor-pointer fixed right-10 bottom-10 z-20"
        >
        {mode==="dark"?night:day}
        </span>
      </div>
    </div>
  );
}

export default App;
