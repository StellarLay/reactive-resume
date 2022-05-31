export interface IModalProps {
  isOpen?: (setIsAddJob: boolean) => void;
  modalOpen?: (setModalOpen: boolean) => void;
  handleClose?: (close: any) => void;
}
