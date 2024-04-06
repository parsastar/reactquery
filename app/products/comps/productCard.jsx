"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import getSingleProductQeury from "@/lib/quaries/Producst/getSingleProductQuery";
import { useQuery } from "@tanstack/react-query";
import shortString from "@/lib/textFunctions/shortString";
const ProductCard = ({ id }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => getSingleProductQeury(id),
    queryKey: ["product", id],
  });
  const { title, userId, description, price, thumbnail } = data
    ? data
    : {
        title: "fake",
        userId: id,
        description: "fake description",
        price: "fakePrice",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      };
  // return (
  //   <Box m={"auto"}>
  //     <Skeleton isLoaded={!isLoading}>
  //       <Card height={"580px"} maxW="sm">
  //         <CardBody>
  //           <Image
  //             width={"100%"}
  //             height={"250px"}
  //             margin={"auto"}
  //             objectFit="cover"
  //             src={thumbnail}
  //             alt="Green double couch with wooden legs"
  //             borderRadius="lg"
  //           />
  //           <Stack mt="6" spacing="3">
  //             <Heading size="md">{title}</Heading>
  //             <Text>{description}</Text>
  //             <Text color="blue.600" fontSize="2xl">
  //               {price}$
  //             </Text>
  //           </Stack>
  //         </CardBody>
  //         <Divider />
  //         <CardFooter>
  //           <ButtonGroup spacing="2">
  //             <Button variant="solid" colorScheme="blue">
  //               Buy now
  //             </Button>
  //             <Button variant="ghost" colorScheme="blue">
  //               Add to cart
  //             </Button>
  //           </ButtonGroup>
  //         </CardFooter>
  //       </Card>
  //     </Skeleton>
  //   </Box>
  // );
  return (
    <Box m={"auto"}>
      <Card bgColor={"white"} height={"580px"} maxW="sm">
        <CardBody>
          <Skeleton isLoaded={!isLoading}>
            <Image
              width={"100%"}
              height={"250px"}
              margin={"auto"}
              objectFit="cover"
              src={thumbnail}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </Skeleton>
          <Stack mt="6" spacing="3">
            <Skeleton isLoaded={!isLoading}>
              <Heading size="md">{title}</Heading>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Text>{shortString(description)}</Text>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Text color="blue.600" fontSize="2xl">
                {price}$
              </Text>
            </Skeleton>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Skeleton isLoaded={!isLoading}>
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
            </Skeleton>
            <Skeleton isLoaded={!isLoading}>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </Skeleton>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};
export default ProductCard;
