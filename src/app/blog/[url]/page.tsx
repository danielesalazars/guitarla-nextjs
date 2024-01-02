import Image from "next/image";
import { Post } from "@/interfaces/IPost";
import { formatearFecha } from "@/utils/helpers";
import styles from "@/styles/blog.module.css";

interface Params {
  url: string;
}
export async function generateMetadata({ params }: { params: Params }) {
  return { title: `GuitarLA - Blog  ${params.url}` };
}

const getData = async (url: string) => {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: posts } = await respuesta.json();
  return { posts };
};

const PageGuitarraDetails = async ({ params }: { params: { url: string } }) => {
  const { posts } = await getData(params.url);
  const { contenido, imagen, titulo, publishedAt, url }: Post =
    posts[0].attributes;

  const descText = contenido.map(({ children }) =>
    children?.map(({ text }) => text)
  );

  return (
    <main className="contenedor">
      <article className={`${styles.post} mt-3`}>
        <Image
          className="imagen"
          width={1000}
          height={600}
          src={imagen.data.attributes.url}
          alt={`Imagen blog ${titulo}`}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          {descText.map((content, i) => (
            <p key={i} className={styles.texto}>
              {content}
            </p>
          ))}
          {/* <p className="texto">{contenidoText}</p> */}
        </div>
      </article>
    </main>
  );
};

export default PageGuitarraDetails;
