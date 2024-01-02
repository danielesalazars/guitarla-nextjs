import Image from "next/image";
import { Metadata } from "next";
import nosotrosIMG from "../../../public/img/nosotros.jpg";
import styles from "@/styles/nosotros.module.css";

export const metadata: Metadata = {
  title: "GuitarLA - Nosotros",
  description: "Sobre nosotros, guitarLA, tienda de música",
};

const NosotrosPage = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className={styles.contenido}>
        <Image src={nosotrosIMG} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            culpa expedita mollitia laborum asperiores eaque illum pariatur
            repudiandae, distinctio neque labore praesentium ipsum eos minus
            quisquam itaque eligendi sapiente nemo.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            culpa expedita mollitia laborum asperiores eaque illum pariatur
            repudiandae, distinctio neque labore praesentium ipsum eos minus
            quisquam itaque eligendi sapiente nemo.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
