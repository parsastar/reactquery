import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Stack, Button, Text } from "@chakra-ui/react";
import Linkbtn from "./components/linkbtn";
import React from "react";
export default function Home() {
  return (
    <div className={styles.container}>
      <Text as={"h1"} fontSize={"5xl"} m={" 0 0  50px 0"}>
        {" "}
        Hey Welcome to this page{" "}
      </Text>
      <Stack direction={["column", "row"]} spacing={"50px"}>
        <Linkbtn padding="30px 50px" url="/Products" />
        <Linkbtn padding="30px 65px" url="/Posts" />
      </Stack>
    </div>
  );
}
