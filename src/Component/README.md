# ReactToPDF

So this helps one create a PDF file for any React component. There is already one npm pkg for acheiving this functionality,so why this one you ask?

1. Some of them were failing with newer version of react.
2. Thought of adding more features to it in future as per my requirement.
3. Just something to stop me from playing Valorant ig?

## Installing
 ` npm i @kunwarji/react-to-pdf `

## Usage
Creating reference for passing it down to ReactToPDF:-
```
<div ref={refVar}>
  Something inside the component being rendered. Bazinga!
</div>
```

Calling component:-
```
  <ReactToPDF element={refVar}>
    `{(toPdf) => (
      <button type="button" onClick={toPdf}>
        Click me
      </button>
      )
    }
  </ReactToPDF>`
```
Reference passed to an element prop.

## Working
Basically it is using html2canvas (to take snap traversing the DOM) and jsPDF (to generate pdf).


(More of the jsPDF feature to be included.)