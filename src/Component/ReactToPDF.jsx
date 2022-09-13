import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'

function ReactToPDF(props) {

  const convertToPDF = () => {
    if (props.element) {
      html2canvas(props.element.current, {
        useCORS: true,
        scale: props.scale ?? 1,
        removeContainer: props.removeContainer ?? false,
        logging: props.logging ?? false,
        onclone: props.modifyFn,
        imageTimeout: props.imageTimeout ?? 0,
        x: props.cropX,
        y: props.cropY,
        windowWidth: props.windowWidth,
        windowHeight: props.windowHeight,
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor ?? null
      })
        .then(resp => {
          const jsPdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4'
          });
          const img = resp.toDataURL();

          const width = jsPdf.internal.pageSize.getWidth();
          const height = jsPdf.internal.pageSize.getHeight();
          console.log('PROPS',props.pdfWidth, width, height)
          jsPdf.addImage(img, props.format ? props.format === 'png' || props.format === 'PNG' ? 'PNG' : 'WEBP' : 'JPEG', props.printStart?.[0] ?? 0, props.printStart?.[1] ?? 0, 0, 0, props.compression ?? 'NONE')
          jsPdf.save(props.fileName ?? 'PDF_FILE')
        })
        .catch((err) => {
          console.error("Error occurred :/ \n Please check the props being passed are correct or not.\n", err)
        })
    } else {
      throw new Error("No Element Reference Found!! Please provide reference of the element that you want to print.")
    }
  }

  return (
    props.children(convertToPDF)
  )
}

export default ReactToPDF