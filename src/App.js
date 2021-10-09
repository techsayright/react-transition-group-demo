import "./App.css";
import { useState } from "react";
import { Transition } from "react-transition-group";
import Dialog from "./Dialog/Dialog";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      <button onClick={() => setIsOpenModel(true)}>Model</button>

      <Transition in={isOpen} timeout={300} mountOnEnter unmountOnExit>
        {/* {(state) => <p>{state}</p>} */}

        {(state) => (
          <div
            style={{
              width: "20vw",
              height: "20vh",
              background: "green",
              margin: "auto",
              transition: "all .3s ease-in-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          >
            hello
          </div>
        )}
      </Transition>

      {/* // uncmnt it whenever u wanaa test Transition only------------------------ */}
      {/* <Transition
        in={isOpenModel}
        timeout={{ enter: 400, exit: 500 }}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("enter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => {
          console.log("onEntered");
        }}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
      >
        {(state) => (
          <Dialog
            state={state}
            isOpenModel={isOpenModel}
            setIsOpenModel={setIsOpenModel}
          />
        )}
      </Transition> */}

      <Dialog setIsOpenModel={setIsOpenModel} isOpenModel={isOpenModel} />
    </div>
  );
}

export default App;
