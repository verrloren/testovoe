import { useAuth } from "@/features/auth/hooks/use-auth";
import { Loader } from "@/shared/ui/loader";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, isLoading } = useAuth();
  
  if (isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
