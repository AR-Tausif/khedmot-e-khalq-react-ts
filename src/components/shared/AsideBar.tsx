import { UserPlus, UsersRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const AsideBar = () => {
  return (
    <div className="relative">
      <div className="flex lg:block md:block hidden text-gray-900 w-14">
        <aside className="flex h-screen w-14 flex-col items-center border-r fixed border-gray-200 bg-white">
          <div className="flex h-14 w-full items-center justify-center border-b border-gray-200 p-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsapwuIZ2JPUVRaWSoX_xoEIOHWxneY7EupS8gsFriA&s"
              width={10}
              height={10}
              className="w-10"
              alt="Logo Image"
            />
          </div>
          <nav className="flex flex-1 flex-col gap-y-4 pt-10">
            <NavLink
              to="/dashboard/create-donor"
              className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
            >
              <UserPlus className="h-6 w-6 stroke-current" />

              <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                  <div className="absolute inset-0 -left-1 flex items-center">
                    <div className="h-2 w-2 rotate-45 bg-white"></div>
                  </div>
                  Create Donor
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50"
            >
              <svg
                width="24"
                height="24"
                className="h-6 w-6 stroke-current group-hover:text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.84285 18.364 5.34315C20.0518 6.84344 21 8.87827 21 11C21 12.0609 20.5259 13.0783 19.682 13.8284C18.8381 14.5786 17.6935 15 16.5 15H14C13.5539 14.9928 13.1181 15.135 12.7621 15.404C12.4061 15.673 12.1503 16.0533 12.0353 16.4844C11.9203 16.9155 11.9528 17.3727 12.1276 17.7833C12.3025 18.1938 12.6095 18.5341 13 18.75C13.1997 18.9342 13.3366 19.1764 13.3915 19.4425C13.4465 19.7085 13.4167 19.9851 13.3064 20.2334C13.196 20.4816 13.0107 20.6891 12.7764 20.8266C12.5421 20.9641 12.2705 21.0247 12 21"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 11C7.77614 11 8 10.7761 8 10.5C8 10.2239 7.77614 10 7.5 10C7.22386 10 7 10.2239 7 10.5C7 10.7761 7.22386 11 7.5 11Z"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7C11.7239 7 11.5 7.22386 11.5 7.5C11.5 7.77614 11.7239 8 12 8Z"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 11C16.7761 11 17 10.7761 17 10.5C17 10.2239 16.7761 10 16.5 10C16.2239 10 16 10.2239 16 10.5C16 10.7761 16.2239 11 16.5 11Z"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                  <div className="absolute inset-0 -left-1 flex items-center">
                    <div className="h-2 w-2 rotate-45 bg-white"></div>
                  </div>
                  Color Scheme <span className="text-gray-400">(Y)</span>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/donors"
              className="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50"
            >
              <UsersRound className="h-6 w-6 stroke-current group-hover:text-blue-600" />

              <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                  <div className="absolute inset-0 -left-1 flex items-center">
                    <div className="h-2 w-2 rotate-45 bg-white"></div>
                  </div>
                  Donor List
                </div>
              </div>
            </NavLink>
          </nav>

          <div className="flex flex-col items-center gap-y-4 py-10">
            <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <svg
                width="24"
                height="24"
                className="h-6 w-6 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16H12.01M12 8V12V8Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="mt-2 rounded-full bg-gray-100">
              <img
                className="h-10 w-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/35387401?v=4"
                alt="avatar image"
                width={10}
                height={10}
              />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AsideBar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
