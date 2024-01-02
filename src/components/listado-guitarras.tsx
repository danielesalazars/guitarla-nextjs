import Image from "next/image";
import { Guitarra } from "@/interfaces/IGuitarra";
import { ComponentProps, FC } from "react";
import Link from "next/link";
import styles from "@/styles/guitarras.module.css";

type GuitarraCP = ComponentProps<"div">;
type GuitarraProps = GuitarraCP & {
  guitarra: Guitarra;
};
const ListadoGuitarras: FC<GuitarraProps> = ({ guitarra }) => {
  const { description, imagen, nombre, precio, url } = guitarra;

  const descText = description.map(({ children }) =>
    children?.map(({ text }) => text)
  );

  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descText}</p>
        <p className={styles.precio}>${precio}</p>

        <Link className="enlace" href={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default ListadoGuitarras;
