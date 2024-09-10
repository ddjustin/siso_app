// lib/auth/authService.js
import { supabase } from "../supabaseClient";

// 사용자 로그인
export async function authLogin(phone: string) {
  const { data, error } = await supabase.functions.invoke("auth-login", {
    body: { name: "justin" },
    headers: { "Content-Type": "application/json" },
  });
  if (error) throw error;

  console.log("들어오니??");
  return data;
}
