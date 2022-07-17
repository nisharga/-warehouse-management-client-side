import React from "react";
import PageTitle from "../../SharedComponents/PageTitle/PageTitle";
import SingleBlogs from "./SingleBlogs/SingleBlogs";

const Blogs = () => {
  const BlogsALL = [
    {
      id: 1,
      title: "Different between javascript and node?",
      description:
        "Javascript is a programming language, on the other side node js is javascript Runtime inviroment. Javascript can run only on browser node js run only in the server. Javascript basically a client side programming language and Node. Js is server side programming language. Javascript capable to add html tag but Node js have't any ability to add html tag. Javascript is used to front end development and node js used to back end development.Javascript most popular Framework is React. Js and Express is node js popular Framework.",
    },
    {
      id: 2,
      title: "When should you use node.js && when should you use mongoDb?",
      description:
        "Node.Js and Mongodb are two different things. MongoDB is a database,  which can perform CRUD operation (Create, Read, Update, Delet). On the Other side Node. Js is Run time environment. Its responsible to existing application. Node. Js helps us to connect our client side to database by his server side.",
    },
    {
      id: 3,
      title: "What is the purpose of jwt token and how does it work?",
      description:
        "Authentication is a system to verify a user and Authorization is a process to limitation a user. JWT token(JSON WEB TOKEN) mainly use for authentication. But its also use for some Authorization purpose also.  After sign in then jwt assign a value to that server.  The token tells the server which route, services, resources  the user allow to access. client app sends a sign-in request. Once verified, the API will create a JSON Web Token (more on this in a bit) and sign it using a secret key.Then the API will return that token back to the client application.That's how it works.",
    },
  ];
  return (
    <>
      <PageTitle pagetitle="Blog"></PageTitle>
      <div className="blog-container bg-light pt-3 pb-2">
        <div className="container">
          <div className="row">
            {BlogsALL.map((blogs) => (
              <SingleBlogs blogs={blogs} key={blogs.id}></SingleBlogs>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
