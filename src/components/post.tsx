import { ComponentProps, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../interfaces/IPost";
import { formatearFecha } from "@/utils/helpers";
import styles from "@/styles/blog.module.css";

type CPPost = ComponentProps<"div">;
type PostProps = CPPost & {
  post: Post;
};

const Post: FC<PostProps> = ({ post }) => {
  const { contenido, imagen, titulo, url, publishedAt } = post;

  const contenidoText = contenido.map(({ children }) =>
    children?.map(({ text }) => text)
  );
  return (
    <article className={styles.post}>
      <Image
        className="imagen"
        width={600}
        height={400}
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen blog ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenidoText}</p>
        <Link className="enlace" href={`/blog/${url}`}>
          Leer Posts
        </Link>
      </div>
    </article>
  );
};

export default Post;
