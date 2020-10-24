import Link from "next/link"
import Layout from "../components/layout"
import React from "react";

export default function Page404() {
  return (
    <Layout title="404">
      <section className="page-404 full-height flex-around-center">
        <div className="page-404__desc flex-basis30">
          <h6>404 error</h6>
          <h1>Страница не найдена!</h1>
          <Link href="/"><a className="btn-primary">Вернуться на главную</a></Link>
        </div>
        <div className="page-404__bg flex-basis60">
          <img src="/404-bg.png" alt="login" />
        </div>
      </section>
    </Layout>
  )
}