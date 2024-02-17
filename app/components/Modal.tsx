
interface ModalProps {
  modalOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ modalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">This modal works with a hidden checkbox!</p>
        <div className="modal-action">
          <label htmlFor="my_modal_6" className="btn">Close!</label>
        </div>
      </div>
    </div>
  )
}

export default Modal