import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const Herosection = ({ title, para, imgUrl }) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.grid_two_section}>
        <div className={heroStyles.hero_content}>
          <h1>{title}</h1>
          <p>{para}</p>
          <Link href="/movie">
            <button>Explore Movies</button>
          </Link>
        </div>

        <div className={heroStyles.hero_image}>
          <Image src={imgUrl} alt="watching movie" fill />
        </div>
      </div>
    </main>
  );
};

export default Herosection;
