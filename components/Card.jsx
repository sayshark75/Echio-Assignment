import { Button, Checkbox, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ data }) => {
  const { image, name, desc, platform } = data;
  return (
    <Flex bgColor={"white"} w={"100%"} p={2} rounded={"lg"} boxShadow={"xl"} gap={2}>
      <Flex justifyContent={"flex-start"} alignItems={"center"} position={"relative"}>
        <Image maxW={"200px"} w={"100%"} src={image} alt="Some Random Image" />
        <Flex p={2} bgColor={"white"} rounded={"md"} position={"absolute"} top={"-2px"} left={"-2px"}>
          <Checkbox value="checkId"></Checkbox>
        </Flex>
      </Flex>
      <Flex flex={3} direction={"column"} justifyContent={"space-between"}>
        <Text fontWeight={"medium"}>{name}</Text>
        <Text fontSize={"sm"}>{desc}</Text>
        <Text fontWeight={"medium"}>{platform}</Text>
        <Flex gap={3}>
          <Button w={"80px"} h={"30px"} fontSize={"sm"} bgColor={"green.500"} color={"white"}>
            Accepted
          </Button>
          <Button w={"60px"} h={"30px"} fontSize={"sm"} bgColor={"purple.600"} color={"white"}>
            Barter
          </Button>
        </Flex>
      </Flex>
      <Flex flex={1} direction={"column"} justifyContent={"space-evenly"} alignItems={"center"}>
        <Button colorScheme="blue" variant="solid">
          DETAIL
        </Button>
        <Button colorScheme="blue" variant="outline">
          INVITE
        </Button>
        <Button colorScheme="blue" variant="ghost">
          ANALYSE
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;
