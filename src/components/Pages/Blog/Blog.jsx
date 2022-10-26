import React from "react";
import CorsImage from "../../../images/cors.png";
import FirebaseLogo from "../../../images/firebase-logo.png";
import PrivetLogo from "../../../images/private.png";
import NodeLogo from "../../../images/download.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src={CorsImage}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                What is Cross-Origin Resource Sharing (CORS) ?
              </h3>
              <p>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
              </p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                src={FirebaseLogo}
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Why using Firebase?
                </h3>
                <p>
                  The Firebase Realtime Database lets you build rich,
                  collaborative applications by allowing secure access to the
                  database directly from client-side code. Data is persisted
                  locally, and even while offline, realtime events continue to
                  fire, giving the end user a responsive experience. When the
                  device regains connection, the Realtime Database synchronizes
                  the local data changes with the remote updates that occurred
                  while the client was offline, merging any conflicts
                  automatically.
                </p>
                <p className="font-bold">Authentication Options:</p>
                <p>Google, GitHub, Twitter, Email and Password, Yahoo etc.</p>
              </div>
            </Link>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={PrivetLogo}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  How does Private Routes Works?
                </h3>
                <p>
                  Private Routes in React Router (also called Protected Routes)
                  require a user being authorized to visit a route (read: page).
                  So if a user is not authorized for a specific page, they
                  cannot access it. The most common example is authentication in
                  a React application where a user can only access the protected
                  pages when they are authorized (which means in this case being
                  authenticated). Authorization goes beyond authentication
                  though. For example, a user can also have roles and
                  permissions which give a user access to specific areas of the
                  application.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={NodeLogo}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  What is NODE ?How does it works?
                </h3>
                <p>
                  Node.js is an open-source backend javascript runtime
                  environment. It is a used as backend service where javascript
                  works on the server-side of the application. This way
                  javascript is used on both frontend and backend.
                </p>
                <p><span className="font-bold">Working of Node.js:</span> Node.js accepts the
                  request from the clients and sends the response, while working
                  with the request node.js handles them with a single thread. To
                  operate I/O operations or requests node.js use the concept of
                  threads. Thread is a sequence of instructions that the server
                  needs to perform.</p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className=" btn px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
