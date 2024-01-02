import Post from "@/components/post";
import { Posts } from "@/interfaces/IPost";
import styles from "@/styles/blog.module.css";

const getData = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await respuesta.json();
  console.log(posts);
  return { posts };
};

const PageBlog = async () => {
  const { posts } = await getData();
  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {posts.map((post: Posts) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </main>
  );
};

export default PageBlog;
