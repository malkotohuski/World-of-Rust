import { Navigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";

export const RouteGuard = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};
