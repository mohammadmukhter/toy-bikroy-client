const Blog = () => {
  return (
    <div className="mx-12 my-8 space-y-4">
      <div>
        <h2 className="text-6xl font-bold text-[#643843] text-center mb-8 mt-12">
          MongoDB and Node js blog
        </h2>
      </div>
      <div className="border border-gray-400 p-2 rounded-xl">
        <h2 className="text-gray-700 font-semibold text-xl bg-red-50 mb-2 rounded p-2">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className="text-gray-600 font-medium p-2">
          <span className="bg-gray-500 text-white underline p-1 rounded">
            Access Token and its function:
          </span>{" "}
          When a user logins in, the authorization server issues an access
          token, which is an artifact that client applications can use to make
          secure calls to an API server. When a client application needs to
          access protected resources on a server on behalf of a user, the access
          token lets the client signal to the server that it has received
          authorization by the user to perform certain tasks or access certain
          resources.
        </p>
        <p className="text-gray-600 font-medium p-2">
          <span className="bg-gray-500 text-white underline p-1 rounded">
            Refresh Token and its function:
          </span>{" "}
          For security purposes, access tokens may be valid for a short amount
          of time. Once they expire, client applications can use a refresh token
          to "refresh" the access token. That is, a refresh token is a
          credential artifact that lets a client application get new access
          tokens without having to ask the user to log in again.
        </p>
        <p className="text-gray-600 font-medium p-2">
          For Storing Token is the best way is http cookie and second best way
          is browser localStorage
        </p>
      </div>

      <div className="border border-gray-400 p-2 rounded-xl">
        <h2 className="text-gray-700 font-semibold text-xl bg-red-50 mb-2 rounded p-2">
          2. Compare SQL and NoSQL databases?
        </h2>
        <p className="text-gray-600 font-medium p-2">
          <span className="bg-gray-500 text-white underline p-1 rounded">
            SQL vs NoSQL:
          </span>{" "}
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>

      <div className="border border-gray-400 p-2 rounded-xl">
        <h2 className="text-gray-700 font-semibold text-xl bg-red-50 mb-2 rounded p-2">
          3. What is express js and nest js?
        </h2>
        <p className="text-gray-600 font-medium p-2">
          <span className="bg-gray-500 text-white underline p-1 rounded">
            Express js:
          </span>{" "}
          Express is a minimalist and flexible framework that is easy to use and
          has a large community of developers. Express follows a traditional
          request-response model, where each incoming request is processed by a
          route handler that sends a response back to the client.
        </p>
        <p className="text-gray-600 font-medium p-2">
          <span className="bg-gray-500 text-white underline p-1 rounded">
            Nest js:
          </span>{" "}
          NestJS is a newer framework that provides additional features such as
          dependency injection, a modular architecture, and an intuitive CLI.
          Nest js follows a modular architecture that is based on the
          Model-View-Controller (MVC) design pattern. NestJS applications are
          organized into modules, and each module can have controllers,
          services, and providers. Controllers handle incoming requests,
          services contain business logic, and providers manage dependencies.
        </p>
      </div>

      <div className="border border-gray-400 p-2 rounded-xl">
        <h2 className="text-gray-700 font-semibold text-xl bg-red-50 mb-2 rounded p-2">
          4. What is MongoDB aggregate and how does it work?
        </h2>
        <p className="text-gray-600 font-medium p-2">
          <span className="bg-gray-500 text-white underline p-1 rounded">
            MongoDB aggregation and its work:
          </span>{" "}
          MongoDB Aggregation is a way of processing a large number of documents
          in a collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline.In MongoDB, aggregation operations process the
          data records/documents and return computed results. It collects values
          from various documents and groups them together and then performs
          different types of operations on that grouped data like sum, average,
          minimum, maximum, etc to return a computed result.
        </p>
      </div>
    </div>
  );
};

export default Blog;
