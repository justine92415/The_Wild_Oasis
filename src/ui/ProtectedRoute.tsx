import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is No authenticate user, redirect to the /login
  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. While loading, show a spinner
  if (isLoading) {
    return (
      <div className="bg-grey-50 flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  // 4. If there is a user, render the children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
