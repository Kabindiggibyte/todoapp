import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  children:React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen,children }) => {
  return (
    <div>
      <dialog className={`modal ${modalOpen ? "modal-open" : ""} `}>
        <div className="modal-box relatives">
          <form method="dialog">
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
