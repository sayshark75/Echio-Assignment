import { Checkbox, CheckboxGroup, Flex, Input, Link, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

const FormComp = () => {
  const router = useRouter();

  const [query, setQuery] = useState({});

  const handlePopularity = (value) => {
    if (value.length !== 0) {
      const [gte, lte] = value[0].split("-");
      router.push({
        pathname: "/",
        query: { gte, lte },
      });
      router.push({
        pathname: "/",
        query: { hello: 100, lte },
      });
    }
  };

  return (
    <Flex
      gridColumnStart={2}
      gridColumnEnd={5}
      gridRowStart={3}
      gridRowEnd={"auto"}
      bgColor={"white"}
      rounded={"xl"}
      boxShadow={"xl"}
      direction={"column"}
      mx={3}
      p={6}
      gap={3}
      pb={4}
    >
      <Text fontWeight={"medium"}> POPULARITY</Text>
      <CheckboxGroup colorScheme="blue" onChange={handlePopularity}>
        <Flex ml={2} direction={"column"} gap={3}>
          <Checkbox value="1000-9999">Nano (1k-9k)</Checkbox>
          <Checkbox value="100000-999999">micro (100k-999k)</Checkbox>
          <Checkbox value="1000000-10000000">macro (1M-10M)</Checkbox>
          <Checkbox value="custom">Custom</Checkbox>
          <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
            <RangeSliderTrack bgColor={"#0066FF"}>
              <RangeSliderFilledTrack bgColor={"#00aFFF"} />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} bgColor={"#0066FF"} />
            <RangeSliderThumb index={1} bgColor={"#0066FF"} />
          </RangeSlider>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text>{"0"}</Text>
            <Text>{"10M"}</Text>
          </Flex>
        </Flex>
      </CheckboxGroup>

      <Text fontWeight={"medium"}> CHAMPAIGN PREFERENCE</Text>
      <CheckboxGroup colorScheme="blue">
        <Flex ml={2} direction={"column"} gap={3}>
          <Checkbox value="barter">Barter</Checkbox>
          <Checkbox value="paid">Paid</Checkbox>
        </Flex>
      </CheckboxGroup>

      <Text fontWeight={"medium"}> PLATFORM</Text>
      <CheckboxGroup colorScheme="blue">
        <Flex ml={2} direction={"column"} gap={3}>
          <Checkbox value="youtube">Youtube</Checkbox>
          <Checkbox value="instagram">Instagram</Checkbox>
        </Flex>
      </CheckboxGroup>

      <Text fontWeight={"medium"}> ENGAGEMENT RATE</Text>
      <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
        <RangeSliderTrack bgColor={"#0066FF"}>
          <RangeSliderFilledTrack bgColor={"#00aFFF"} />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} bgColor={"#0066FF"} />
        <RangeSliderThumb index={1} bgColor={"#0066FF"} />
      </RangeSlider>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text>{"0"}</Text>
        <Text>{"10M"}</Text>
      </Flex>

      <Text fontWeight={"medium"}> AVERAGE RATE</Text>
      <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
        <RangeSliderTrack bgColor={"#0066FF"}>
          <RangeSliderFilledTrack bgColor={"#00aFFF"} />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} bgColor={"#0066FF"} />
        <RangeSliderThumb index={1} bgColor={"#0066FF"} />
      </RangeSlider>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text>{"0"}</Text>
        <Text>{"10M"}</Text>
      </Flex>

      <Text fontWeight={"medium"}> CATEGORIES</Text>
      <Input variant={"flushed"} type="text" placeholder="Search Category" />
      <CheckboxGroup colorScheme="blue">
        <Flex ml={2} direction={"column"} gap={3}>
          <Checkbox value="Autos & Vehicles">Autos & Vehicles</Checkbox>
          <Checkbox value="Animations">Animations</Checkbox>
          <Checkbox value="Agriclture & Allied Sectors">Agriclture & Allied Sectors</Checkbox>
          <Checkbox value="Arts & Craft">Arts & Craft</Checkbox>
          <Checkbox value="Beauty">Beauty</Checkbox>
          <Checkbox value="Blog & Travel">Blog & Travel</Checkbox>
        </Flex>
      </CheckboxGroup>
      <Link fontSize={"sm"} ml={3} color={"blue.500"}>
        More Categories
      </Link>
    </Flex>
  );
};

export default FormComp;
