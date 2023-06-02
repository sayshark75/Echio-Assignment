import { Flex, Grid } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Breadcrum from "../components/Breadcrum";
import FormComp from "../components/FormComp";
import Card from "../components/Card";
import SortComp from "../components/SortComp";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://zany-pear-hedgehog-shoe.cyclic.app/data", {
        // params: {
        //   popularity_gte: 0,
        //   popularity_lte: 9999,
        // },
      });
      console.log("res: ", res);
      setData(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Grid templateColumns={"repeat(12,1fr)"} templateRows={"repeat(3,auto)"} bgColor={"#EEEEEE"} pb={5}>
      <Navbar />
      <Breadcrum />
      <FormComp />
      <Flex gridColumnStart={5} gridColumnEnd={12} gridRowStart={3} gridRowEnd={"auto"} direction={"column"}>
        <SortComp />
        <Flex flexGrow={13} justifyContent={"flex-start"} direction={"column"} gap={2} my={4} alignItems={"center"}>
          {data?.map((el, id) => {
            return <Card key={id + Date.now()} data={el} />;
          })}
        </Flex>
      </Flex>
    </Grid>
  );
}
