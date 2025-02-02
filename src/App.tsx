import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { RegisterPage } from "@/pages/register";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "@/widgets/header";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { Loader } from "@/shared/ui/loader";
import { useUserStore } from "@/entities/user/store/use-user-store";
import { PublicRoute } from "./pages/routes/public-route";
import { ProtectedRoute } from "./pages/routes/protected-route";

export function App() {
  const { isLoading } = useAuth();
	const isAuth = useUserStore(state => state.user);

  if (isLoading) {
    return <Loader />
  }

  return (
		<>
		{isAuth && <Header />}
		<Routes>
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
		</>
  );
}