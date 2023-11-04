import { useEffect, useRef, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import "./Main.css";

function Main() {
  const [state, setState] = useState({ group: 0, order: 0 });
  // const stateRef = useRef(state);
  // let stateVar = state;
  // console.log(state);

  // useEffect(()=> {
  //   console.log(state);
  // })
  // useEffect(() => {
  //   stateVar = state;
  // }, [])

  function handleStateChager(stateUpdate) {
    // console.log('handleStateChager');
    // stateRef.current = state;
    setState({ ...stateUpdate });
    // stateRef.current = state;
    // stateVar = stateUpdate;
  }

  return (
    <div className="main">
      <div className="flex">
        <TopBar handler={handleStateChager} />
        <Dashboard state={state} />
      </div>
    </div>
  );

  // return (
  //   <div className="main">
  //     <div className="flex">
  //       <div className="top">
  //         <div>C</div>
  //         <div>C</div>
  //         <div>C</div>
  //       </div>
  //       <ul className="bottom">
  //         <li className="column">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="column">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="column">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="column">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="column">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );

  // let length = 5;
  // let text = "";
  // for (let i = 0; i < length; i++) {
  //   text = text + " 1fr ";
  // }
  // console.log(text);

  // return (
  //   <div className="main">
  //     <div className="flex">
  //       <div className="top">
  //         <div>C</div>
  //         <div>C</div>
  //         <div>C</div>
  //       </div>
  //       <ul
  //         className="bottomG"
  //         style={{
  //           display: "grid",
  //           gridTemplateColumns: text,
  //           // gridTemplateRows: "1fr",
  //         }}
  //       >
  //         <li className="columnG">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="columnG">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="columnG">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="columnG">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="columnG">
  //           <div className="user">
  //             <div className="name"></div>
  //             <ul className="conversation">
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //               <li className="message"></li>
  //             </ul>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
}

export default Main;

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
