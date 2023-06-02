import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
import React from "react";
import { MdChevronRight } from "react-icons/md";

const Breadcrum = () => {
  return (
    <Flex mx={2} my={2} gridColumnStart={2} gridColumnEnd={12} gridRowStart={2} gridRowEnd={3}>
      <Breadcrumb spacing="8px" separator={<MdChevronRight color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink color={"#555555"} href="#">
            Link /
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink color={"#555555"} href="#">
            Link /
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontWeight={"medium"} href="#">
            Link
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

export default Breadcrum;
