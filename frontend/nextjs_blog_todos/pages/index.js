import Auth from "../components/Auth";
import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";

export default function Home() {
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  );
}
