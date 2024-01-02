import Image from "next/image";
import { Guitarra } from "@/interfaces/IGuitarra";
import styles from "@/styles/guitarras.module.css";

interface Params {
  url: string;
}
export async function generateMetadata({ params }: { params: Params }) {
  return { title: `GuitarLA - Guitarra  ${params.url}` };
}

const getData = async (url: string) => {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  return { guitarra };
};

const PageGuitarraDetails = async ({ params }: { params: { url: string } }) => {
  const { guitarra } = await getData(params.url);
  const { nombre, description, imagen, precio }: Guitarra =
    guitarra[0].attributes;

  const descText = description.map(({ children }) =>
    children?.map(({ text }) => text)
  );

  return (
    <main className="contenedor">
      <div className={styles.guitarra}>
        <Image
          className="imagen"
          width={600}
          height={400}
          src={imagen.data.attributes.url}
          alt={`Imagen de la guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className="texto">{descText}</p>
          <p className={styles.precio}>${precio}</p>

          {/* <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form> */}
        </div>
      </div>
    </main>
  );
};

export default PageGuitarraDetails;
