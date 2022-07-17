import { useEffect, useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    const url = "https://quiet-temple-29937.herokuapp.com/inventory";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [setProduct]);
  return [product, setProduct];
};

export default useProduct;
