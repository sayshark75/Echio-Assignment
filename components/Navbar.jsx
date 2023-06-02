import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex gridColumnStart={2} gridColumnEnd={12} p={2} bgColor={"white"} rounded={"full"} m={2} mx={2} boxShadow={"lg"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} flex={[0, 1]} gap={2}>
        <Image w={"30px"} src="/favicon.ico" alt="Simple Vercel Logo" />
        <Link fontSize={["sm", "lg"]} mr={4} _hover={{ borderBottom: "2px solid #008FFF", fontWeight: "semibold" }}>
          Home
        </Link>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"} flex={1}>
        <Link fontSize={["sm", "lg"]} ml={4} _hover={{ borderBottom: "2px solid #008FFF", fontWeight: "semibold" }}>
          My Champaign
        </Link>
        <Flex justifyContent={"space-between"} fontSize={"2xl"} alignItems={"center"} gap={[1, 5]}>
          <BsFillBellFill />
          <FaUserCircle />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
