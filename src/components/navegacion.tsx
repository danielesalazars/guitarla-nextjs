"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CarritoPNG from "../../public/img/carrito.png";

const Navegacion = () => {
  const pathname = usePathname();

  return (
    <nav className="navegacion">
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        href="/nosotros"
        className={pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link
        href="/guitarras"
        className={pathname === "/guitarras" ? "active" : ""}
      >
        Guitarras
      </Link>
      <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
        Blog
      </Link>
      <Link href="/carrito">
        <Image src={CarritoPNG} alt="Carrito" />
      </Link>
    </nav>
  );
};

export default Navegacion;
