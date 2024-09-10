import { useState } from "react";
import { authLogin } from "../db/auth/authService";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (phone: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await authLogin(phone);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
}
