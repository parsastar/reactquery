import React from "react";
import ProductList from "./comps/productList";
import { Heading, Text } from "@chakra-ui/react";

export default function ProductPage() {
  return (
    <div>
      <Heading
        as={"h1"}
        size={"3xl"}
        textAlign={"center"}
        m={"100px auto 10px"}
        color={"white"}
      >
        Product
      </Heading>
      <Text
        textAlign={"center"}
        color={"white"}
        fontSize={"2xl"}
        m={"20px auto 40px"}
      >
        hey this is product page lets explore our products
      </Text>
      <ProductList />
    </div>
  );
}
