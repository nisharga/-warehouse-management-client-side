import { useEffect, useState } from "react";

const useMyitem = (email) => {
  const [myitems, setmyitems] = useState();
  useEffect(() => {
    const url = `https://quiet-temple-29937.herokuapp.com/myitems/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setmyitems(data));
  }, [myitems]);
  return [myitems, setmyitems];
};

export default useMyitem;
