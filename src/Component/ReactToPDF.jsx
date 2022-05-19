import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'

function ReactToPDF(props) {

  const convertToPDF = () => {
    if (props.element) {
      html2canvas(props.element.current, {
        logging: false,
        useCORS: true,
        scale: props.scale
      })
        .then(resp => {
          const jsPdf = new jsPDF();
          const img = resp.toDataURL();
          jsPdf.addImage(img, 'JPEG', props.x ?? 10, props.y ?? 10)
          jsPdf.save(props.fileName ?? 'PDF_FILE')
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