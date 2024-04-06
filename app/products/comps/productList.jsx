"use client";
import React, { useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import getProductsQuery from "@/lib/quaries/Producst/getProductsQuery";
import { useState } from "react";
import ProductCard from "./productCard";
import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
export default function ProductList() {
  const limit = 9;
  const [pageCounter, setpageCounter] = useState(1);
  const [showList, setShowList] = useState([]);
  const updateShowList = useCallback(() => {
    for (let i = showList.length + 1; i < limit * pageCounter + 1; i++) {
      setShowList((prev) => [...prev, i]);
    }
  }, [pageCounter , showList.length ]);
  updateShowList();
  useEffect(() => {
    updateShowList();
  }, [pageCounter , updateShowList]);
  const clickHandler = () => {
    setTimeout(() => {
      window.scrollBy({
        top: 500, // Scrolls down 100px
        behavior: "smooth", // Smooth scrolling
      });
    }, 100);
    setpageCounter(pageCounter + 1);
  };
  return (
    <Flex flexDir={"column"}>
      <SimpleGrid columns={3} spacingX="00px" spacingY="40px">
        {showList.map((item) => (
          <ProductCard key={item} id={item} />
        ))}
      </SimpleGrid>
      <Button
        maxW={"300px"}
        m={"100px auto"}
        textAlign={"center"}
        p={"35px 60px"}
        onClick={() => clickHandler()}
      >
        Show More
      </Button>
    </Flex>
  );
}
