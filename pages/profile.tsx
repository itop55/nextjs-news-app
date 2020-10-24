import { AuthProps, privateRoute } from "../components/private_route"
import Cookie from "js-cookie"
import Router from "next/router"
import { COOKIES } from "../services/login_service"
import Layout from "../components/layout"

type Props = AuthProps & {
  message: string
}

function Page(props: Props) {
  const logout = async () => {
    Cookie.remove(COOKIES.authToken);
    await Router.push("/login");
  };
  const {email, name, avatarUrl, role, country, city, address} = props.auth.userData

  return (
      <Layout title="Профиль пользователя">
        <section className="user-profile">
          <div className="user-profile__title">
            <h1>Profile info</h1>
            <button className="btn-secondary" onClick={logout}>Logout</button>
          </div>
          <div className="user-profile__vn">
            <div className="user-profile__avatar">
              <img src={avatarUrl} alt="user avatar"/>
              <div className="user-profile__avatar-desc">
                <h6>{role}</h6>
                <h3>{name}</h3>
              </div>
            </div>
            <div className="user-profile__desc">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" defaultValue={email} />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" defaultValue={country} />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" defaultValue={city} />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" defaultValue={address} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
  )
}

export default privateRoute(Page);
