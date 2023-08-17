import { useCallback, useState } from "react";
import styles from "./OrderOnline.module.css";
import Modal from "../../Modal";

export default function OrderOnline() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <div className={styles.orderOnline_wrapper}>
      <button
        type="button"
        className={`p__opensans ${styles.orderOnline}`}
        onClick={open}
      >
        Order Online
      </button>
      <Modal title="Order Online" onClose={close} open={isOpen}>
        Explore our menu and get your cravings delivered right to you! Enjoy our
        tasty treats brought to your door. It's only 500 AMD for delivery, and
        if you're all set to order, give us a ring at 033 456 321. Yum awaits!"
      </Modal>
    </div>
  );
}
