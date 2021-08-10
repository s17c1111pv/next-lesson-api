import Layout from "../components/Layout";
import Link from "next/link";
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";

export default function BlogPage({ filteredPosts }) {
  // console.log(filteredPosts);
  // export default function BlogPage() {
  // const func = async () => {
  //   const filteredPosts = await getAllPostsData();
  //   return filteredPosts;
  // };
  // const filteredPosts = func().then((data) => {
  //   return data;
  // });
  // async function func() {
  //   const filteredPosts = await getAllPostsData();
  //   return {
  //     filteredPosts,
  //   };
  // }
  // console.log(
  //   func().then((data) => {
  //     console.log(data);
  //   })
  // );
  // console.log(filteredPosts);
  // console.log(filteredPosts.length);
  // console.log(filteredPosts.props.map((post) => console.log(post)));
  // const fun = async () => {
  //   const res = await fetch("http://localhost:8000/api/list-post/");
  //   // const posts = await res.json();
  //   // const filteredPosts = posts.sort(
  //   //   (a, b) => new Date(b.created_at) - new Date(a.created_at)
  //   // );
  //   return res.json();
  // };
  // console.log(await fetch("http://localhost:8000/api/list-post/")).json();
  // fun().then((res) => console.log(res.json));
  // console.log(fun());
  // console.log(
  //   fetch("http://localhost:8000/api/list-post/").then((data) => {
  //     return data.json();
  //   })
  // );
  // console.log(process.env.NEXT_PUBLIC_RESTAPI_URL);
  return (
    <Layout title="Blog page">
      <ul>
        {filteredPosts &&
          filteredPosts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  // try {
  const filteredPosts = await getAllPostsData();
  return {
    props: { filteredPosts },
    revalidate: 3,
  };
  //  catch (e) {
  //   const filteredPosts = [
  //     {
  //       id: 3,
  //       title: "Can't use fetch(my api route) in getstaticProps()",
  //       content:
  //         "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**.",
  //       created_at: "2021-08-05 14:48:16",
  //     },
  //     {
  //       id: 2,
  //       title: "When to Use Static Generation v.s. Server-side Ren",
  //       content:
  //         "We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.",
  //       created_at: "2021-08-05 14:47:13",
  //     },
  //     {
  //       id: 1,
  //       title: "Two Forms of Pre-rendering",
  //       content:
  //         "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**.",
  //       created_at: "2021-08-05 14:46:16",
  //     },
  //   ];
  //   return { props: { filteredPosts } };
  // }
}

// export async function getStaticProps() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`
//   );
//   const filteredPosts = await res.json();
//   return { props: { filteredPosts } };
//   // const res = await fetch("http://localhost:8000/api/list-post/");
//   // const posts = await res.json();
//   // const filteredPosts = posts.sort(
//   //   (a, b) => new Date(b.created_at) - new Date(a.created_at)
//   // );
//   // // const filteredPosts = [
//   // //   {
//   // //     id: 1,
//   // //     title: "dummy title",
//   // //     content: "dummy content",
//   // //     created_at: "2021-08-05 13:17:33",
//   // //   },
//   // // ];
//   // return {
//   //   props: { filteredPosts },
//   // };
// }

// BlogPage.getInitialProps = async (ctx) => {
//   const res = await fetch("http://localhost:8000/api/list-post/");
//   const filteredPosts = await res.json();
//   return { props: { filteredPosts } };
// };

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:8000/api/list-post/`);
//   const filteredPosts = await res.json();

//   return {
//     props: { filteredPosts }, // will be passed to the page component as props
//   };
// }
