import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'
import PropTypes from 'prop-types'

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

ReactToPDF.propTyppes = {
  element: PropTypes.element.isRequired,
  scale: PropTypes.number,
  logging: PropTypes.bool,
  cropX: PropTypes.number,
  cropY: PropTypes.number,
  backgroundColor: PropTypes.string,
  modifyFn: PropTypes.func,
  imageTimeout: PropTypes.number,
  removeContainer: PropTypes.bool,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  printStart: PropTypes.array,
  format: PropTypes.string,
  children: PropTypes.func.isRequired,
  fileName: PropTypes.string,
  compression: PropTypes.string,
}
export default ReactToPDF