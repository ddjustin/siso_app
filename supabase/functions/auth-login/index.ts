import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0";

export function getSupabaseClient() {
  const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
  const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "Supabase URL or Service Role Key is not set in environment variables."
    );
  }

  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

Deno.serve(async (req) => {
  // const corsHeaders = {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers":
  //     "authorization, x-client-info, apikey, content-type",
  // };

  // const supabase = getSupabaseClient();
  console.log(await req.json());
  // const {
  //   name,
  // phoneNumber, authCode, userAuthCode
  // } = await req.json();

  // if (!authCode || authCode !== userAuthCode)
  //   return new Response(
  //     JSON.stringify({ value: "인증코드가 존재하지 않습니다!" }),
  //     {
  //       status: 400,
  //     }
  //   );

  // const { data, error } = await supabase
  //   .from("users")
  //   .select("id")
  //   .eq("phone_number", phoneNumber);

  // if (error) {
  //   return new Response(JSON.stringify({ value: "에러발생" }), {
  //     status: 400,
  //   });
  // }

  // if (data) {
  //   return new Response(JSON.stringify({ value: "유저 발생" }), {
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }

  //   return new Response(JSON.stringify({ value: 1 }), {
  //     headers: { ...corsHeaders, "Content-Type": "application/json" },
  //   });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/auth_login' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
