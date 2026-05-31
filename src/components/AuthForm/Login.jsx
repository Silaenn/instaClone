import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, error, login } = useLogin();
  return (
    <>
      <Input
        placeholder="Email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        fontSize={14}
        size={"sm"}
        type="email"
      />
      <Input
        placeholder="Password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        fontSize={14}
        size={"sm"}
        type="password"
      />

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={0} border="2px solid black" bg="retro.pink" color="white">
          <AlertIcon fontSize={12} color="white" />
          {error.message}
        </Alert>
      )}

      <Button
        w={"full"}
        size={"sm"}
        fontSize={14}
        onClick={() => login(inputs)}
        isLoading={loading}
        isDisabled={loading}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
