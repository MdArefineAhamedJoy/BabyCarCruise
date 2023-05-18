import React from "react";

const Blog = () => {
  return (
    <>
      <h1 className="mx-auto mt-5 bg-sky-700 text-white md:w-40 w-full text-center rounded-md font-bold text-2xl">Blog Section</h1>
      <div className="md:m-8 md:mb-16 my-4 md:p-5 p-2 shadow-md h-96 overflow-y-scroll overflow-x-hidden">
        <div className="hover:shadow-xl md:m-4 md:p-4 hover:bg-slate-200">
          <h2 className="font-bold text-xl mb-2">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <div className=" ">
            <p>
              Refresh tokens allow you to balance your users' access needs with
              your organization's security practices. Access tokens help users
              get the resources they need to complete their tasks, but such
              tokens can also expose your organization to data compromise or
              other malicious actions if a hacker is able to steal them.
            </p>
            <p>
              Access Tokens: Access tokens are issued to a client after
              successful authentication. They are used to access protected
              resources or perform authorized actions. The client includes the
              access token in each request to the server. The server validates
              the access token to authorize the client's actions. Storage on the
              client-side: Access tokens can be stored in memory or browser
              storage mechanisms like localStorage or sessionStorage. It is
              important to store them securely and clear them when the
              application is closed or the user logs out. Consider using
              HTTP-only cookies or secure storage mechanisms to prevent
              unauthorized access.
            </p>
          </div>
        </div>
        <div className="hover:shadow-xl md:m-4 md:p-4 hover:bg-slate-200 ">
          <h2 className="font-bold text-xl">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables, with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
        <div className="hover:shadow-xl md:m-4 md:p-4 hover:bg-slate-200 ">
          <h2 className="font-bold text-xl">
            What is express js? What is Nest JS
          </h2>
          <p className="">
            js and Express. js are two different frameworks that are used to
            build different sets of applications. While ExpressJs is a Node.
            js-based web application framework to build APIs and server-side
            applications, NextJs on the other hand is a react-based framework
            used for creating static websites and SEO optimizations
          </p>
        </div>
        <div className="hover:shadow-xl md:m-4 md:p-4 hover:bg-slate-200 hover:rounded-lg">
          <h2 className="font-bold text-xl">
            What is MongoDB aggregate and how does it work
          </h2>
          <p className="">
            What is Aggregation in MongoDB? Aggregation is a way of processing a
            large number of documents in a collection by means of passing them
            through different stages. The stages make up what is known as a
            pipeline. The stages in a pipeline can filter, sort, group, reshape
            and modify documents that pass through the pipeline.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
