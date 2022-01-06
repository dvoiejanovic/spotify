import { ReactNode, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import styles from "./Dialog.module.css";

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
      <div className={styles.backdrop} onClick={props.onClose}>
        <div className={styles.dialog} onClick={(event) => event.stopPropagation()}>
          <div className={styles.dialogHeader}>
            {props.title}
            <FiX onClick={props.onClose} />
          </div>
          <div className={styles.dialogContent}>{props.children}</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Dialog;
