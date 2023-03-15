import {Modal as BSModal, Button} from "react-bootstrap";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"

const Modal = (props) => {
  return (
    <BSModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onClose}
    >
      <BSModal.Header closeButton closeVariant='white' style={{border: "none", backgroundColor: '#2c2e0e', color: 'antiquewhite'}}>
        {props.headerTitle && <BSModal.Title id="contained-modal-title-vcenter" className="w-100 text-center">
          <span className="w-100 m-auto">{props.headerTitle}</span>
        </BSModal.Title>}
        <div className="d-flex justify-content-center w-100 gap-3">
          <button className="border-0 bg-transparent" onClick={props.handlePrev}><AiFillCaretLeft color="antiquewhite"/></button>
          {`${props.selectedImage+1}/${props.count}`}
          <button className="border-0 bg-transparent" onClick={props.handleNext}><AiFillCaretRight color="antiquewhite"/></button>
        </div>
      </BSModal.Header>
      <BSModal.Body style={{border: "none", backgroundColor: '#2c2e0e', color: 'antiquewhite'}}>
        {props.children}
      </BSModal.Body>
    </BSModal>
  )
}

export default Modal;