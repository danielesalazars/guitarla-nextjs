import { ComponentProps, FC } from "react";
import { CursoAttributes } from "@/interfaces/ICurso";
import styles from "@/styles/curso.module.css";

type CPCurso = ComponentProps<"div">;
type CursoProps = CPCurso & {
  curso: CursoAttributes;
};

const Curso: FC<CursoProps> = ({ curso }) => {
  const { contenido, imagen, titulo } = curso;

  const contenidoText: string[] = [];

  contenido.map(({ children }) =>
    children?.map(({ text }) => {
      contenidoText.push(text);
    })
  );

  return (
    <section
      className={styles.curso}
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url})`,
      }}
    >
      <div className={`contenedor ${styles.cursoGrid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          {contenidoText.map((content, i) => {
            return (
              <p className={styles.texto} key={i}>
                {content}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curso;
