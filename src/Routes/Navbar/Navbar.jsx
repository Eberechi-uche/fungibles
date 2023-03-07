import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
export const Navbar = () => {
  return (
    <>
      <Flex p={"5"} direction="column" justify={"center"}>
        <Outlet />
      </Flex>
    </>
  );
};
