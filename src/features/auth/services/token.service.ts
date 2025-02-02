import Cookies from 'js-cookie';
import { TokenResponse } from '../model/types';

export class TokenService {
  private static TOKEN_KEY = 'access_token';

  static getToken(): TokenResponse {
    const token = Cookies.get(this.TOKEN_KEY);
    return { token };
  }

  static setToken(token: string): void {
    Cookies.set(this.TOKEN_KEY, token, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: 30 // days
    });
  }

  static removeToken(): void {
    Cookies.remove(this.TOKEN_KEY);
  }
}