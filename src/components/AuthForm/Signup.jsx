import { Input } from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
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
        placeholder="Username"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        fontSize={14}
        type="text"
      />
      <Input
        placeholder="Full Name"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        fontSize={14}
        type="text"
      />
      <Input
        placeholder="Password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        fontSize={14}
        type="password"
      />
    </>
  );
};

export default Signup;
