import {get} from "../services/rest_service"
import Layout from "../components/layout"
import Post from "../components/post"

type Props = {
  posts: any[];
}

function Page({posts}: Props) {
  return (
      <Layout title="Страница новостей">
        <div className="posts-wrapper">
          {
            posts.map((item, index) => {
              return <Post  key={index} {...item} index />
            })
          }
        </div>
      </Layout>
  )
}

Page.getInitialProps = async () => {
  let posts = []
  const res: any = await get(`${process.env.NEWS_API_URL}?q=tesla&from=2020-09-23&apiKey=${process.env.NEWS_API_KEY}`);

  if (res.data && res.data.status === "ok") {
    posts = res.data.articles;
  } else {
    console.error(res.error)
  }

  return {posts}
};

export default Page;
