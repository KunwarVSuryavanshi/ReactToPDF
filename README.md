# ReactToPDF

So this helps one create a PDF file for any React component. There is already one npm pkg for acheiving this functionality, so why this one you ask?

1. Some of them were failing with newer version of react.
2. Wanted to add certain more feature that is being provided by jsPdf and html2canvas.

## Installing
 ` npm i @kunwarji/react-to-pdf `

## Usage
Creating reference for passing it down to ReactToPDF:-
```javascript
<div ref={refVar}>
  Something inside the component being rendered. Bazinga!
</div>
```

Calling component:-
```javascript
  <ReactToPDF element={refVar}>
    {(toPdf) => (
      <button type="button" onClick={toPdf}>
        Click me
      </button>
      )
    }
  </ReactToPDF>
```
Reference passed to an element prop.

### Other props
- `scale` - The scale to use for rendering. (Optional - Defaults value is 1)
- `cropX` - Crops canvas x-coordinate. (Optional - Default value is 0)
- `cropY` - Crop canvas y-coordinate. (Optional - Default value is 0)
- `printStart` - Array of [x, y] coordinate from where one wants the element to appear from on canvas. (Default - [0, 0])
- `fileName` - Name of the pdf file when it is downloaded. (Default - PDF_FILE) 
- `format` - Rarely needed, but the image used for printing whether it should be JPEG, PNG, WEBP.
- `compression` - compression of the generated JPEG, can have the values 'NONE', 'FAST', 'MEDIUM' and 'SLOW'
- `backgroundColor` - Canvas background color, if none is specified in DOM. Set null for transparent
- `logging` - Enable logging for debug purposes
- `modifyFn` - Callback function which is called when the Document has been cloned for rendering, can be used to modify the contents that will be rendered without affecting the original source document.
- `imageTimeout` - Timeout for loading an image (in milliseconds). Set to 0 to disable timeout.
- `width` - The width of the canvas.
- `height` - The height of the canvas.

## Working
Basically it is using html2canvas (to take snap after traversing the DOM) and jsPDF (to generate pdf).