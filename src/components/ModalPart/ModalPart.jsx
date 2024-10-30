import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalPart(props) {
  return (
    <Modal
      show={props.isShowModal}
      size="lg"
      centered
      scrollable
      backdrop={"static"}
      restoreFocus={false}
    >
      <Modal.Body>
        <img src={props.img} className="block" alt="" />
        {props.time && (
          <p className="bg-blue-900 text-white text-center rounded-[5px] text-lg w-28 py-2 my-4 ">
            {props.time}
          </p>
        )}
        <h4 className="text-slate-500 text-lg">{props.company}</h4>
        <h3 className="font-bold text-3xl mb-4">{props.howToWork}</h3>
        <p className="text-slate-500 text-lg mb-3 text-justify">
          {props.textModalP1}
        </p>
        <p className="text-slate-500 text-lg  mb-3 text-justify">
          {props.textModalP2}
        </p>
        <p className="text-slate-500 text-lg text-justify">
          {props.textModalP3}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.setIsShowModal(false)}>بستن</Button>
      </Modal.Footer>
    </Modal>
  );
}
