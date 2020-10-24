import React, { useState } from "react"
import { login } from "../services/login_service"
import Layout from "../components/layout"

export type LoginInputs = {
  email: string
  password: string
}

function Page() {
  const initialValues: LoginInputs = { email: "admin@admin.com", password: "admin123admin", };

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await login(inputs);
    if (res) setError(res);
  };

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <Layout title="Авторизация">
        <section className="auth-wrap full-height">
          <div className="auth-wrap__vn flex-around-center">
            <div className="auth-wrap__form flex-basis30">
              <div className="auth-wrap__form-title">
                <h1>Sign in</h1>
              </div>
              <form className="mb-6" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder="rickety_cricket@example.com"/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" onChange={handleInputChange} value={inputs.password} placeholder="********"/>
                </div>
                <button className="btn-primary" type="submit">Sign in</button>
              </form>
              {
                error &&
                <div className="form-error">
                  <p>{error}</p>
                </div>
              }
            </div>
            <div className="auth-wrap__bg flex-basis60">
              <img src="/login-bg.png" alt="login" />
            </div>
          </div>
        </section>
      </Layout>
  )
}

export default Page;
