import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillHome,
  AiFillPlayCircle,
  AiOutlineMenu,
  BsSearch,
  BsSunFill,
  VscAccount,
} from "../icons";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-1 nav-div">
      <div className="flex-row-sb">
        <AiOutlineMenu
          size={22}
          className="icon mr-sm font menu-icon"
          onClick={() => setMenu(!menu)}
        />
        <Link to="/">
          <div className="responsive-img-container flex-row-sb logo-div mr-1">
            <img
              src="../assets/hero-img.svg"
              alt="paw-pedia-logo"
              className="img-responsive"
            />
            <h3 className="font">Timesand</h3>
          </div>
        </Link>
        <div className="search search-div ml-auto flex-row-sb">
          <BsSearch className="m-sm font" size={18} />
          <input
            type="text"
            className="search-box text-rg"
            placeholder="Search"
          />
        </div>
        <div className="flex-row-sb ml-auto">
          <BsSunFill size={22} className="icon mx-sm font" />
          <VscAccount
            size={22}
            className="icon mx-sm font acc-icon"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
      <div className="search search-div-btm flex-row-sb my-sm">
        <BsSearch className="m-sm font" size={18} />
        <input
          type="text"
          className="search-box text-rg"
          placeholder="Search"
        />
      </div>
      {menu && (
        <div className="aside-con-responsive">
          <div className="flex-row-sb-start p-1 side-option-div">
            <AiFillHome size={23} className="icon m-sm" />
            <h4 className="text-regular p-sm">Home</h4>
          </div>
          <div className="flex-row-sb-start p-1 side-option-div">
            <AiFillPlayCircle size={23} className="icon m-sm" />
            <h4 className="text-regular p-sm">My tasks</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export { Navbar };
