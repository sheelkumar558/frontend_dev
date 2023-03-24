import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/products/action";
import { Text, Grid } from "@chakra-ui/react";
import { Filter } from "../components/Filter";
import { Product } from "../components/Product";
export const Shoppage = () => {
  const products = useSelector((state) => state.All.products);
  const loading = useSelector((state) => state.All.loading);
  const error = useSelector((state) => state.All.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      <Text>Shop All</Text>
      <Filter />
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong, please try again</h1>
      ) : (
        <Grid templateColumns="repeat(3,1fr)" gap={6}>
          {products.length > 0 &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </Grid>
      )}
    </div>
  );
};
