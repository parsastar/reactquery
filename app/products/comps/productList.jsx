"use client";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import getProductsQuery from "@/lib/quaries/Producst/getProductsQuery";
import { useState } from "react";
import ProductCard from "./productCard";
export default function ProductList() {
  const limit = 3;
  const [pageCounter, setpageCounter] = useState(1);
  const [showList, setShowList] = useState([]);
  const updateShowList = () => {
    for (let i = showList.length + 1; i < limit * pageCounter + 1; i++) {
      setShowList((prev) => [...prev, i]);
    }
  };
  updateShowList();
  useEffect(() => {
    updateShowList();
  }, [pageCounter]);
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => setpageCounter(pageCounter + 1)}>Click me</button>
      {showList.map((item) => (
        <ProductCard key={item} id={item} />
      ))}
    </div>
  );
}
