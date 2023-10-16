import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const selectedOptionRef = useRef();

  const handleLogin = () => {
    const preUser = localStorage.getItem("user");
    if (preUser) {
      localStorage.removeItem("user");
    }
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const selectedOption = selectedOptionRef.current.value;
    const user = { role: selectedOption, id: email, pass: password };
    localStorage.setItem("user", JSON.stringify(user));
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
            <select
              //   variant="standard"
              //   label="Select Option"
              className=" p-3 rounded-md"
              ref={selectedOptionRef}
            >
              <option className=" my-2  text-md" value="user">
                Access User Dashboard
              </option>
              <option value="instruct">Access Instructor Dashboard</option>
              <option value="admin">Access Admin Dashboard</option>
            </select>
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
