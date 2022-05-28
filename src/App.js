import { useRef } from "react";
import ReactToPDF from "./Component/ReactToPDF";

function App() {
  const refVar = useRef()
  return (
    <div>
      <ReactToPDF element={refVar} scale={0.5} fileName='Bazinga'>
        {(toPdf) => (
          <button type="button" onClick={toPdf}>
            Click me
          </button>
          )
        }
      </ReactToPDF>
      <div ref={refVar}>
        Something inside APP.js
      </div>
    </div>
  );
}

export default App;
