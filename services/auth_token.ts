import jwtDecode from "jwt-decode";

export type DecodedToken = {
  readonly email: string;
  readonly exp: number;
  readonly name: string;
  readonly avatarUrl: string;
  readonly role: string;
  readonly country: string;
  readonly city: string;
  readonly address: string;
}

export class AuthToken {
  readonly decodedToken: DecodedToken;

  constructor(readonly token?: string) {
    this.decodedToken = {
      email: "",
      exp: 0,
      name: '',
      avatarUrl: '',
      role: '',
      country: '',
      city: '',
      address: ''
    };
    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {}
  }

  get userData(): any {
    return {
      email: this.decodedToken.email,
      name: this.decodedToken.name,
      avatarUrl: this.decodedToken.avatarUrl,
      role: this.decodedToken.role,
      country: this.decodedToken.country,
      city: this.decodedToken.city,
      address: this.decodedToken.address,
    }
  }
  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  get isAuthenticated(): boolean {
    return !this.isExpired;
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }
}
