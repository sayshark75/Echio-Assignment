import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const SortComp = () => {
  return (
    <Flex w={"full"} flex={1}>
      <Flex flex={1} direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={2}>
        <Flex>
          <Text fontWeight={"medium"}>Sort By</Text>
        </Flex>
        <Flex gap={2}>
          <Text rounded={"full"} py={1} px={2} fontSize={"xs"} bgColor={"#DDDDDD"} color={"black"}>
            High to Low
          </Text>
          <Text rounded={"full"} py={1} px={2} fontSize={"xs"} bgColor={"#DDDDDD"} color={"black"}>
            Low to High
          </Text>
          <Text rounded={"full"} py={1} px={2} fontSize={"xs"} bgColor={"#DDDDDD"} color={"black"}>
            Newest
          </Text>
          <Text rounded={"full"} py={1} px={2} fontSize={"xs"} bgColor={"#009fff"} color={"black"}>
            Popular
          </Text>
        </Flex>
      </Flex>
      <Flex flex={1} gap={2} justifyContent={"flex-end"} alignItems={"flex-start"}>
        <Button fontSize={"sm"} colorScheme="blue" variant="ghost">
          Select All
        </Button>
        <Button fontSize={"sm"} colorScheme="blue" variant="outline">
          Invite
        </Button>
        <Button fontSize={"sm"} colorScheme="blue" variant="solid">
          Add Champaign
        </Button>
      </Flex>
    </Flex>
  );
};

export default SortComp;
