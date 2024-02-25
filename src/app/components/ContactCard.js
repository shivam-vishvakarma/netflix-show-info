import styles from "@/app/contact/contact.module.css";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <h2>Email</h2>
            <p>Monday to Friday Expected</p>
            <p className={styles.last_para}>response time: 72 hours</p>
            <Link href="mailto:shivamvishva552@gmail.com"> Send Email</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
