import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/logo.svg";
import Navegacion from "./navegacion";

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link href="/" className="logo">
          <Image src={Logo} width={300} height={40} alt="Imagen Logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
};

export default Header;
