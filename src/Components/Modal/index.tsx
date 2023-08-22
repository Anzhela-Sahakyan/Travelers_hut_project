// Modal.tsx
import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
import "../../App.css";
import { useScrollbar } from "../../hooks/useScrollbar";
import useEscapeKey from "../../hooks/useEscapeKey";

interface ModalProps {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, open, onClose }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const { enableScroll, disableScroll } = useScrollbar();

  useEscapeKey(onClose);

  useEffect(() => {
    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [open, enableScroll, disableScroll]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button className={styles.modalClose} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
