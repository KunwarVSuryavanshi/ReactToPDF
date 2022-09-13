import { useRef } from "react";
import ReactToPDF from "./Component/ReactToPDF";

function App() {
  const refVar = useRef()

  const callbackFn = () => {
    console.log("Modify function called");
  }

  return (
    <div>
      <ReactToPDF
        element={null}
        scale={1}
        cropX={0}
        cropY={0}
        removeContainer={true}
        fileName='Bazinga'
        logging={true}
        modifyFn={callbackFn}
        printStart={[10, 10]}
        format="PNG"
      >
        {(toPdf) => (
          <button type="button" onClick={toPdf}>
            Click me
          </button>
          )
        }
      </ReactToPDF>
      <div ref={refVar} style={{width: '100vw', height: '100vh', backgroundColor: 'yellow', position: 'relative'}}>
        Something inside APP.js <br/> <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur doloribus explicabo excepturi? Doloribus sit laudantium laboriosam quae repudiandae autem nulla! Necessitatibus similique magnam ratione. Amet vitae molestiae autem eveniet.
        <div style={{bottom: '0px', position: 'absolute'}}>
          klahsflkahsf
        </div>
      </div>
    </div>
  );
}

export default App;
