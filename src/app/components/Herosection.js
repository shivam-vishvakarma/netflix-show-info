import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";


const Herosection = ({title, imgUrl}) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellendus nobis dolorum possimus porro optio sit ipsa qui, quo non eius deleniti vel quisquam vero.</p>
                        <Link href='/movie'>
                        <button>Explore Movies</button>
                        </Link>
                    </div>

                    <div className={heroStyles.hero_image}>
                        <Image src={imgUrl} alt="watching movie" width={500} height={500}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Herosection;