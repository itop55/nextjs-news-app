import {get} from "../../services/rest_service";
import Layout from "../../components/layout";

export default function PostDetail({post}: any) {
  console.log(post)
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const postDetail = post.length ? post[0] : {}
  return (
      <Layout title={`Новостной портал | ${postDetail.title}`} >
        <div className="posts-detail">
          <div className="posts-detail__bg" style={{backgroundImage: `url(${postDetail.urlToImage})`}}></div>
          <h1>{postDetail.title}</h1>
          <p>Author: <span className="gray-text">{postDetail.author}</span></p>
          <p>Published: <span className="gray-text">{(new Date(postDetail.publishedAt).toLocaleString('en', options))}</span></p>
          <p>{postDetail.description}</p>
          <a href={postDetail.url} target="_blank" className="btn-secondary">Full Article</a>
        </div>
      </Layout>
  )
}

PostDetail.getInitialProps = async (ctx: any) => {
  let post = []
  const res: any = await get(`${process.env.NEWS_API_URL}?q=${ctx.query.postId}&apiKey=${process.env.NEWS_API_KEY}`);

  if (res.data && res.data.status === "ok") {
    post = res.data.articles;
  } else {
    console.error(res.error)
  }

  return {post}
};