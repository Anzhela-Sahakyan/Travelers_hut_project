import styles from "./Subheading.module.css";
import "../../../src/App.css";

interface SubheadingProps {
  title: string;
}

export default function Subheading({ title }: SubheadingProps) {
  return (
    <div className={styles.subheading_wrapper}>
      <p className="p__cormorant">{title}</p>
      <img></img>
    </div>
  );
}
