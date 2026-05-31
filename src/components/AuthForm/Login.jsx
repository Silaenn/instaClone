import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
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
      <InputGroup>
        <Input
          placeholder="Password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          fontSize={14}
          size={"sm"}
          type={showPassword ? "text" : "password"}
        />
        <InputRightElement h={"full"} pr={2} pointerEvents={"auto"} display="flex" alignItems="center" zIndex={1}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
            opacity={1}
            bg="transparent"
            color="black"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

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
