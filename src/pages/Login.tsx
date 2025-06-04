
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
