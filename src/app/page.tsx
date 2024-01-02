import { Metadata } from "next";
import { Guitarras } from "@/interfaces/IGuitarra";
import { Posts } from "@/interfaces/IPost";
import ListadoGuitarras from "@/components/listado-guitarras";
import Post from "@/components/post";
import guitarraCSS from "@/styles/guitarras.module.css";
import blogCSS from "@/styles/blog.module.css";
import Curso from "@/components/curso";

export const metadata: Metadata = {
  title: "GuitarLA - Inicio",
};

const getData = async () => {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),
  ]);

  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([resGuitarras.json(), resPosts.json(), resCurso.json()]);

  console.log(guitarras);
  return [{ guitarras, posts, curso }];
};

const Page = async () => {
  const [{ guitarras, posts, curso }] = await getData();
  return (
    <>
      <main className="contenedor">
        <h1 className="heading"> Nuestra Colección</h1>
        <div className={guitarraCSS.guitarrasGrid}>
          {guitarras.map((guitarra: Guitarras) => (
            <ListadoGuitarras
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={blogCSS.blog}>
          {posts.map((post: Posts) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Page;
