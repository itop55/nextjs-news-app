import Link from 'next/link'

export default function Post(props:any) {
  return (
      <div className="post-card">
        <img src={props.urlToImage} alt={props.title} />
          <div className="post-card__body">
            <h5 className="post-card__title">{props.title}</h5>
            <p className="post-card__text">{props.description}</p>
            <Link href={`post/${props.title}`}><a className="btn btn-primary">Подробнее</a></Link>
          </div>
      </div>
  )
}