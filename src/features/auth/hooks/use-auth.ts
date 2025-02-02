import { useState, useEffect } from 'react';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { token } = await TokenService.getToken();
      if (!token) {
        setIsAuth(false);
        setIsLoading(false);
        return;
      }
      
      try {
        const profile = await AuthService.isAuth(token);
        setIsAuth(!!profile.email);
      } catch {
        setIsAuth(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const updateAuthStatus = (status: boolean) => {
    setIsAuth(status);
  };

  return { isAuth, isLoading, updateAuthStatus };
};