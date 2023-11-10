import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  color?:
    | 'secondary'
    | 'success'
    | 'info'
    | 'dark'
    | 'danger'
    | 'warning'
  | 'light';
  onClick: () => void;
}
const Button: React.FC<Props> = ({ children, onClick, color = 'primary' }) => {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
