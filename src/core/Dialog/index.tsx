import { ReactNode, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import "./Dialog.scoped.scss";

interface IDialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Dialog: React.FC<IDialogProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.open);

  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);

  if (isOpen) {
    return (
      <div className="backdrop" onClick={props.onClose}>
        <div className="dialog" onClick={(event) => event.stopPropagation()}>
          <div className="dialog-header">
            {props.title}
            <FiX className="clickable-icon" onClick={props.onClose} />
          </div>
          <div className="dialog-content">{props.children}</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Dialog;
