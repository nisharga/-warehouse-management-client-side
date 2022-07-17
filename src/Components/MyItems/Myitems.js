import React from "react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import useMyitem from "../../Hooks/useMyitem/useMyitem";
import auth from "../../SharedComponents/Firebase_Auth/Auth";
import PageTitle from "../../SharedComponents/PageTitle/PageTitle";
import Spinner from "../../SharedComponents/Spinner/Spinner";
import MyitemsTableData from "./MyitemsTableData/MyitemsTableData";

const Myitems = () => {
  const [user] = useAuthState(auth);
  let userEmail;
  if (user) {
    userEmail = user.email;
  }
  // const [myitems] = useMyitem(userEmail);
  const [myitems, setmyitems] = useState();
  useEffect(() => {
    const url = `https://quiet-temple-29937.herokuapp.com/myitems/${userEmail}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setmyitems(data));
  }, [myitems]);
  return (
    <>
      <PageTitle pagetitle={userEmail}></PageTitle>
      <div className="inventoryArea">
        <h2 className="featureTitle">
          My <span>Items</span>
        </h2>
        <p className="text-center"></p>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-dark">
                <thead className="text-center">
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delet Item</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {myitems?.map((val) => (
                    <MyitemsTableData
                      val={val}
                      key={val._id}
                    ></MyitemsTableData>
                  )) || <Spinner></Spinner>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myitems;
