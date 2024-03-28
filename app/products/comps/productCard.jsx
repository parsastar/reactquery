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
} from "@chakra-ui/react";
import getSingleProductQeury from "@/lib/quaries/Producst/getSingleProductQuery";
import { useQuery } from "@tanstack/react-query";
const ProductCard = React.memo(({ id }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => getSingleProductQeury(id),
    queryKey: ["product", id],
  });
  if (isLoading) return <div>loading</div>;
  else {
    console.log(data)
    const {title , id , description , price , thumbnail} = data
    return (
      <Card maxW="sm">
        <CardBody>
          <Image
            src={thumbnail}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>
              {description}
            </Text>
            <Text color="blue.600" fontSize="2xl">
             {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  }
});

export default ProductCard;
