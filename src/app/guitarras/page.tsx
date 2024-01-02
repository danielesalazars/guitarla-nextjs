import ListadoGuitarras from "@/components/listado-guitarras";
import { Guitarras } from "@/interfaces/IGuitarra";
import styles from "@/styles/guitarras.module.css";

const getData = async () => {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();
  return { guitarras };
};

const GuitarraPage = async () => {
  const { guitarras } = await getData();
  return (
    <main className="contenedor">
      <h1 className="heading"> Nuestra Colección</h1>
      <div className={styles.guitarrasGrid}>
        {guitarras.map((guitarra: Guitarras) => (
          <ListadoGuitarras key={guitarra.id} guitarra={guitarra.attributes} />
        ))}
      </div>
    </main>
  );
};

export default GuitarraPage;
