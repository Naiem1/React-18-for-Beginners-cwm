import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert: React.FC<Props> = ({ children, onClose }) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
