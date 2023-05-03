import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import Header from "components/Header";
import Footer from "components/Footer";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  // console.log("SESSION", session);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <Header /> 
      {!session ? (
        <Auth
          redirectTo="http://localhost:3000/"
          providers={["github", "google", "facebook"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="white"
          socialLayout="horizontal"
        />
      ) : (
        <Account session={session} />
      )}
      <Footer />
    </div>
  );
};

export default Login;
