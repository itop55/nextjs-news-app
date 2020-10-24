import ServerCookie from "next-cookies";
import React, { Component } from "react";
import { COOKIES } from "../services/login_service";
import { AuthToken } from "../services/auth_token";
import { redirectToLogin } from "../services/redirect_service";

export type AuthProps = {
  auth: AuthToken
}

export function privateRoute(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    static async getInitialProps(ctx: any) {
      const token = ServerCookie(ctx)[COOKIES.authToken];
      const auth = new AuthToken(token);
      const initialProps = { auth };
      if (auth.isExpired) redirectToLogin(ctx.res);
      if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps(initialProps);
      return initialProps;
    }

    get auth() {
      return new AuthToken(this.props.auth.token);
    }

    render() {
      return <WrappedComponent auth={this.auth} {...this.props} />;
    }
  };
}
