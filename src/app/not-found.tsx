import { Metadata } from "next";
import Link from "next/link";

export const meta: Metadata = {
  title: "Página no encontrada",
};

const NotFound = () => {
  return (
    <main className="contenedor">
      <p className="error">Página no encontrada</p>
      <Link href={"/"} className="error-enlace">
        Ir a inicio
      </Link>
    </main>
  );
};

export default NotFound;
