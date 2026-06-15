import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import authService from "../../services/auth.service";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSuccess = async (
    credentialResponse: any
  ) => {
    try {
      const googleToken =
        credentialResponse.credential;

      const response =
        await authService.googleLogin(
          googleToken
        );

      console.log("API RESPONSE", response);

      login(
        response.user,
        response.token
      );

      console.log("API RESPONSE", response);

      navigate("/chat");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-xl border p-8">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Hoblix AI
        </h1>

        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() =>
            console.log("Login Failed")
          }
        />
      </div>
    </div>
  );
};

export default LoginPage;