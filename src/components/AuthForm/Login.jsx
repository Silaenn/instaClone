import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <>
      <Input
        placeholder="Email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        fontSize={14}
        type="email"
      />
      <Input
        placeholder="Password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        fontSize={14}
        type="password"
      />

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
};

export default Login;
