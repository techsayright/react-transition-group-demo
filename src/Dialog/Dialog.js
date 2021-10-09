import React from "react";
import reactDom from "react-dom";
import { BiError } from "react-icons/bi";
import { CSSTransition, Transition } from "react-transition-group";
import "../Dialog/Dialog.css";

// uncmnt it whenever u wanaa test Transition only------------------------
// export default function Dialog({ state, setIsOpenModel }) {
//   const cssClass = [
//     "Dialog",
//     state === "entering" ? "ModelShow" : state === "exiting" && "ModelClosed",
//   ];
//   return (
//     <React.Fragment>
//       {reactDom.createPortal(
//         <React.Fragment>
//           <div className="overlay" onClick={() => setIsOpenModel(false)} />
//           <div className={cssClass.join(" ")}>
//             <div className="errIcon">
//               <BiError />
//             </div>
//             <div className="main">
//               <h1>Hello Darshan</h1>
//             </div>
//             <div className="btn">
//               <button onClick={() => setIsOpenModel(false)}>OK</button>
//             </div>
//           </div>
//         </React.Fragment>,
//         document.getElementById("error-dialog")
//       )}
//     </React.Fragment>
//   );
// }

export default function Dialog({ setIsOpenModel, isOpenModel }) {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <React.Fragment>
          <Transition
            in={isOpenModel}
            timeout={{ enter: 400, exit: 500 }}
            mountOnEnter
            unmountOnExit
          >
            <div className="overlay" onClick={() => setIsOpenModel(false)} />
          </Transition>

          <CSSTransition
            in={isOpenModel}
            timeout={{ enter: 400, exit: 500 }}
            mountOnEnter
            unmountOnExit
            classNames="fade-slide"
            // classNames={{
            //   enter: "",
            //   enterActive: "ModelShow",
            //   exit: "",
            //   exitActive: "ModelClosed",
            // }}
          >
            {/* fade-slide-enter
          fade-slide-enter-active
          fade-slide-exit
          fade-slide-exit-active */}

            <div className="Dialog">
              <div className="errIcon">
                <BiError />
              </div>
              <div className="main">
                <h1>Hello Darshan</h1>
              </div>
              <div className="btn">
                <button onClick={() => setIsOpenModel(false)}>OK</button>
              </div>
            </div>
          </CSSTransition>
        </React.Fragment>,
        document.getElementById("error-dialog")
      )}
    </React.Fragment>
  );
}
