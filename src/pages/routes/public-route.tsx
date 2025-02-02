import { useAuth } from '@/features/auth/hooks/use-auth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuth();
  
  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};