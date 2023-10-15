import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  return (
    <div className="w-3/4 mx-auto flex justify-center items-center h-full mt-32">
      <Card
        color="transparent"
        shadow={false}
        className="bg-blue-gray-50 p-6 flex flex-col items-center"
      >
        <Typography
          color="gray"
          className="mt-1 font-normal text-2xl text-center"
        >
          Login...
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Emp Id" inputRef={emailRef} />
            <Input
              size="lg"
              label="Password"
              inputRef={passwordRef}
              type="password"
            />
          </div>
          <Button onClick={handleLogin} className="mt-6" color="blue" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
