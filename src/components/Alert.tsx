
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Alert: React.FC<Props> = ({ children }) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
