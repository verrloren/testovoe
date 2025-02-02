import type { z } from 'zod';
import { API_CONFIG } from '@/features/auth/config';
import { LoginSchema, RegisterSchema } from '../schemas/index';
import { TokenService } from './token.service';
import { LOCAL_STORAGE_KEYS, removeFromStorage, setToStorage } from '@/shared/lib/local-storage';
import { useUserStore } from '@/entities/user/store/use-user-store';

export class AuthService {

  private static API_URL = API_CONFIG.BASE_URL;

  static async register(values: z.infer<typeof RegisterSchema>) {
    try {
      const result = await fetch(`${this.API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
				body: JSON.stringify({
					email: values.email,
					password: values.password
				})
      });
			const data = await result.json();
    
			if (!result.ok) {
				return { error: data.message || 'Registration failed' };
			}
			
			return data;
    } catch (error: unknown) {
      return { error };
    }
  }

  static async login(values: z.infer<typeof LoginSchema>) {
    try {
      const result = await fetch(`${this.API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      
      const data = await result.json();
      
      if (data.token) {
        TokenService.setToken(data.token);
        const profile = await this.isAuth(data.token);
				useUserStore.getState().setUser(profile);
        return { success: true, token: data.token };
      }
      
      return { error: data.message || 'Login failed' };
    } catch (error) {
      return { success: false, error };
    }
  }



  static async isAuth( token: string) {
    if (!token) {
      return { message: "No access token" };
    }

    const result = await fetch(`${this.API_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      }
    });
    const data = await result.json();
		if (data.id) {
      setToStorage(LOCAL_STORAGE_KEYS.USER_PROFILE, {
        id: data.id,
        email: data.email
      });
    }
		return data;
  }


  static async logout() {
    TokenService.removeToken();
		removeFromStorage(LOCAL_STORAGE_KEYS.USER_PROFILE);
    useUserStore.getState().setUser(null);
    return { success: true };
  }
}