import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
export default function linkbtn(props) {
  const { padding, url } = props;
  const text = props.text ? props.text : url.slice(url.lastIndexOf("/") + 1);
  return (
    <div>
      {" "}
      <Link
        style={{
          position: "relative",
        }}
        href={url}
      >
        <Button
          fontWeight={"400"}
          padding={padding}
          overflow={"hidden"}
          size={"lg"}
          colorScheme="white"
          variant="outline"
          position={"relative"}
          transition={".5s"}
          _hover={{
            backgroundColor: "white",
            color: "#464646",
            transition: ".5s",
          }}
        >
          {text}
        </Button>
      </Link>
    </div>
  );
}
