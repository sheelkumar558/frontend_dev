import React from "react";
import {
  Flex,
  Spacer,
  Text,
  Icon,
  useDisclosure,
  Button,
  Input,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch, BsBasket3 } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { decQty, incQty, removeFromCart } from "../redux/addCart/action";

export const Navbar = () => {
  const cartAll = useSelector((state) => state.AddCart.cart);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const decreaseQty = (id, size, qty) => {
    if (qty > 1) {
      dispatch(decQty({ id, size }));
    } else {
      dispatch(removeFromCart({ id, size }));
    }
  };
  const increaseQty = (id, size) => {
    dispatch(incQty({ id, size }));
  };

  const convertToNumber = (str) => {
    if (Number(str)) {
      return Number(str);
    }
    let arr = str.includes(",") ? str.split(",") : [];
    let final_str = arr.reduce((a, c) => a + c, "");
    let result = Number(final_str);
    return result;
  };
  let total_original_price = 0;
  let total_final_price = 0;
  cartAll.forEach((prod) => {
    total_original_price += convertToNumber(prod.original_price) * prod.qty;
    total_final_price += convertToNumber(prod.final_price) * prod.qty;
  });

  return (
    <Flex margin="20px" alignItems="center">
      <Spacer />
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945"
          alt="logo img"
        />
      </Link>

      <Spacer />

      <Link to="/collection/all">
        <Text px={4} py={2}>
          SHOP
        </Text>
      </Link>
      <Link to="/collection/all">
        <Text px={4} py={2}>
          WOMEN
        </Text>
      </Link>
      <Link to="/collection/all">
        <Text px={4} py={2}>
          MEN
        </Text>
      </Link>
      <Link to="/collection/all">
        <Text px={4} py={2}>
          NEW ARRIVALS
        </Text>
      </Link>
      <Link to="/collection/all">
        <Text px={4} py={2}>
          ABOUT
        </Text>
      </Link>
      <Link to="/collection/all">
        <Text px={4} py={2}>
          HELP
        </Text>
      </Link>
      <Spacer />
      <Icon boxSize="20px" mx={6} as={BsSearch} />
      <Icon boxSize="20px" mx={6} as={RiUserLine} />
      <Flex ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Icon boxSize="20px" mx={6} as={BsBasket3} />
      </Flex>
      <Text>({`${cartAll ? cartAll.length : 0}`})</Text>
      <Spacer />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            YOUR CART : ({`${cartAll ? cartAll.length : 0}`})
          </DrawerHeader>

          <DrawerBody>
            {cartAll.length > 0 &&
              cartAll.map((item,i) => {
                return (
                  <Flex key={i} >
                    <Image boxSize="80px" src={item.images[0]} alt="shoe" />
                    <Box>
                      <Text casing="lowercase">{`${item.name} | ${item.color} | ${item.gender} `}</Text>
                      <Text as="sup"> {item.size}</Text>
                      <Flex gap={2}>
                        <Flex align="center">
                          <Button
                            isDisabled={item.qty === 0}
                            onClick={() =>
                              decreaseQty(item.id, item.size, item.qty)
                            }
                          >
                            -
                          </Button>
                          <Text>{item.qty}</Text>
                          <Button
                            onClick={() => increaseQty(item.id, item.size)}
                          >
                            +
                          </Button>
                        </Flex>
                        <Flex gap={2}>
                          <Text as="s">₹{item.original_price} </Text>
                          <Text>₹{item.final_price}</Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                );
              })}
          </DrawerBody>
          <Flex justify="space-around" align="center">
            <Text>Sub Total</Text>
            <Flex align="center">
              <Text p={4} as="s">
                ₹{total_original_price}
              </Text>
              <Text>₹{total_final_price}</Text>
            </Flex>
          </Flex>
          <DrawerFooter>
            <Button colorScheme="blue">PROCEED TO CHECKOUT</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
