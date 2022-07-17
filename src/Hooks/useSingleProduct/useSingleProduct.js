import { useEffect, useState } from "react";

const useSingleProduct = (id) => {
  const [singleProduct, setsingleProduct] = useState();
  useEffect(() => {
    const url = `https://quiet-temple-29937.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setsingleProduct(data));
  }, [singleProduct]);
  return [singleProduct, setsingleProduct];
};

export default useSingleProduct;
