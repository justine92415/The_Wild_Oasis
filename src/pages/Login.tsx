import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

function Login() {
  return (
    <main
      className="grid min-h-screen grid-cols-[480px] place-content-center justify-center gap-8
        bg-gray-50"
    >
      <Logo />
      <Heading type="h4">Login in to your account</Heading>
      <LoginForm />
    </main>
  );
}

export default Login;
