import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
