import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { getCurrentData } from "../redux/cart/action";
import { Product } from "../components/Product";
import { addToCart } from "../redux/addCart/action";

export const SinglePage = () => {
  const cartData = useSelector((state) => state.Single.currentProduct);
  const loading = useSelector((state) => state.Single.loading);
  const error = useSelector((state) => state.Single.error);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [size, setSize] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentData(id));
    }
  }, [dispatch, id]);

  const handleCart = () => {
    let payload = {
      ...cartData,
      size,
    };
    dispatch(addToCart(payload));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong...</h1>;
  }
  if (Object.keys(cartData).length === 0) {
    return <h2>Product {id} not found</h2>;
  }

  return (
    <Flex justify="center" align="center">
      <Product product={cartData} />
      <Box>
        <Text as="em">Choose a Size</Text>
        <HStack p={4}>
          {cartData?.sizes.map((size, i) => {
            return (
              <Button key={i} onClick={() => setSize(size)}>
                {size}
              </Button>
            );
          })}
        </HStack>
        <Button bg="yellow" m={4} p={5} isDisabled={!size} onClick={handleCart}>
          {!size ? "PLEASE SELECT A SIZE" : " ADD TO CART"}
        </Button>
      </Box>
    </Flex>
  );
};
