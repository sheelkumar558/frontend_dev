import React, { useState } from "react";
import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const Product = ({ product }) => {
  const navigate = useNavigate();
  const {
    color,
    final_price,
    gender,
    id,
    images,
    name,
    original_price,
    rating,
    reviews,
    sizes,
  } = product;
  const [img, setImg] = useState(images[0]);

  const showOtherImage = () => {
    setImg(images[1]);
  };
  const showOriginalImage = () => {
    setImg(images[0]);
  };
  return (
    <Box
      onMouseEnter={showOtherImage}
      onMouseLeave={showOriginalImage}
      onClick={() => navigate(`/collection/all/${id}`)}
    >
      <Image src={img} alt={name + "shoe"} />
      <Text>{name + " | " + color + " | " + gender}</Text>
      <HStack justify="center">
        <Text>{final_price}</Text>
        <Text color="gray" as="s">
          {original_price}
        </Text>
      </HStack>
    </Box>
  );
};
