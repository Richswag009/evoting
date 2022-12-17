import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Profile = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />

      <div className="container mx-auto my-32">
        <div>
          <div className="bg-red-200 relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
            <div className="flex justify-center">
              <h1 className="rounded-full font-bold bg-[#005281] pt-10 text-center text-4xl uppercase text-white mx-auto absolute bg-slime-300 -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110">
                {user.name[0]}
              </h1>
            </div>

            <div className="mt-16">
              <h1 className="text-center text-3xl uppercase text-black font-medium">
                {user.name}{" "}
              </h1>
              <div className="my-5 px-6">
                <Link
                  href="#"
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  Connect with <span className="font-bold">@pantazisoft</span>
                </Link>
              </div>

              <div className="w-full">
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  <Link
                    href="#"
                    className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Updated his status
                    <span className="text-gray-500 text-xs">24 min ago</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Added new profile picture
                    <span className="text-gray-500 text-xs">42 min ago</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Posted new article in{" "}
                    <span className="font-bold">#Web Dev</span>
                    <span className="text-gray-500 text-xs">49 min ago</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Edited website settings
                    <span className="text-gray-500 text-xs">1 day ago</span>
                  </Link>

                  <Link
                    href="#"
                    className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Added new rank
                    <span className="text-gray-500 text-xs">5 days ago</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
