
interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void; 
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
      <div className="modal-box">
        <button 
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setModalOpen(false)}
          >✕</button>
        {children}
      </div>
    </div>
  )
}

export default Modal