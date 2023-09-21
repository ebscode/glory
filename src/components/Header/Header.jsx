import { NavLink, useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Header = () => {
  const navigation=useNavigation()
  return (
    <div>
        <div className="flex justify-between shadow-md p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-blue-900">Glory</h1>
      <div className="font-medium text-lg space-x-3">
    

        <NavLink
          to={"/home"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-blue-700 p-1 rounded-lg text-white"
              : isPending
              ? "pending"
              : ""
          }
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-blue-700 p-1 rounded-lg text-white"
              : isPending
              ? "pending"
              : ""
          }
          to={"/product"}
        >
          product
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-blue-700 p-1 rounded-lg text-white"
              : isPending
              ? "pending"
              : ""
          }
          to={"/about"}
        >
          about
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-blue-700 p-1 rounded-lg text-white"
              : isPending
              ? "pending"
              : ""
          }
          to={"/contact"}
        >
          contact
        </NavLink>
       
      </div>
  
    </div>
    {
      navigation.state === "loading"? <p className="text-2xl font-semibold text-center mt-40">Loading</p>:<Outlet></Outlet>
    }

    </div>
  );
};

export default Header;
