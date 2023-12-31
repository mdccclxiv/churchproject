import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { LiaPlayCircle, LiaDonateSolid } from "react-icons/lia";
import UserLogin from "../login/UserLogin";
import Menu from "../menu/Menu";

const Header = ({timeline,ease}) => {

 
  const [hamburger, setHamburger] = useState(true);
  const [userAccess, setUserAccess] = useState(false);
  const [menu, setMenu] = useState(false);
  const [give, setGive] = useState(true);

  function handleHamburgerClick() {
    setMenu(!menu);
  }

  function handleUserclick() {
    setUserAccess(!userAccess);
  }

  function openMenu() {
    setHamburger(!hamburger);
    setGive(true)
  }
  function handleGive() {
    setHamburger(true);
    setGive(!give);
  }

  const userAccessRef = useRef();
  const humburgerRef = useRef();


  useEffect(() => {
    document.body.style.overflowY = hamburger ? "auto" : "hidden";
    document.addEventListener("click", handleMenuClick, true);

    return () => {
      document.removeEventListener("click", handleMenuClick, true);
    };
  }, [hamburger]);
  useEffect(() => {
    document.body.style.overflowY = give ? "auto" : "hidden";

  }, [give]);

  useEffect(() => {
    document.body.style.overflowY = !userAccess ? "auto" : "hidden";
    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [userAccess]);

  const handleDocumentClick = (e) => {
    if (userAccessRef.current && !userAccessRef.current.contains(e.target)) {
      handleUserclick();
      console.log("clicked");
    }
  };
  function handleMenuClick(e) {
    if (humburgerRef.current && !humburgerRef.current.contains(e.target)) {
      handleHamburgerClick();
      console.log("clicked");
    }
  }
  return (
    <div className="flex flex-col w-full items-center  ">
      <div className="flex fixed p-2 mx-auto w-full z-50 bg-white  backdrop-blur-sm md:p-3 text-black shadow-lg text-sm">
        <div className="w-full flex mx-auto max-w-6xl justify-between">
          <div className="flex">
            <section
              onClick={openMenu}
              ref={humburgerRef}
              className="flex m-1  hover:cursor-pointer hover:text-orange-400 duration-700 ease-in-out"
            >
              {hamburger ? (
                <AiOutlineMenu
                  className="md:flex my-auto m-1 duration-700 "
                  size={25}
                />
              ) : (
                <AiOutlineClose
                  className="md:flex my-auto m-1 duration-700"
                  size={25}
                />
              )}
            </section>
            <section className="flex m-1  hover:cursor-pointer hover:text-orange-400">
              <LiaPlayCircle className="md:flex my-auto m-1" size={28} />
            </section>
          </div>
          <div className="flex w-[60%] m-auto">
            <span className="hidden text-lg font-normal font-mono m-auto md:flex">
              Gethsemane Life Church
            </span>
            <span className="flex text-lg font-normal font-mono m-auto md:hidden">
              GLC
            </span>
          </div>
          <div className="flex">
            <div
              onClick={handleGive}
              className="flex m-1  hover:cursor-pointer hover:text-orange-400 ease-in-out"
            >
              <LiaDonateSolid size={25} />
              <span className="hidden md:flex m-auto mx-1">Give</span>
            </div>
            <div
              onClick={handleUserclick}
              className="flex m-1  hover:cursor-pointer hover:text-orange-400 ease-in-out"
            >
              <BiUser size={25} />
              <span className="hidden md:flex my-auto mx-1">Account</span>
            </div>
          </div>
        </div>
      </div>
      {userAccess && (
        <div className="w-full h-screen z-50 md:h-[100vh] bg-black/70 backdrop-blur-lg justify-center fixed ">
          <UserLogin ref={userAccessRef} />
        </div>
      )}
      {hamburger ? (
        <div className="fixed top-0 left-[-100%] h-full w-full bg-orange-400/50 text-white transform -transition-transform duration-1000 ease-in-out ">
          <div className="h-full flex items-center justify-center transform -transition-transform duration-1000 ease-in-out ">
            {/* <Menu/> */}
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 z-40 h-full w-full bg-orange-400/50 text-white transform -transition-transform duration-1000 ease-in-out">
          <div className="h-full flex items-center justify-start">
            <Menu />
          </div>
        </div>
      )}
      {give ? (
        <div className="fixed top-0 right-[-100%] h-full w-full bg-orange-400/50 text-white transform -transition-transform duration-1000 ease-in-out ">
          <div className="h-full flex items-center justify-center transform -transition-transform duration-1000 ease-in-out ">
            {/* <Menu/> */}
          </div>
        </div>
      ) : (
        <div className="fixed top-0 right-0 z-40 h-full w-full bg-orange-400/50 text-white transform -transition-transform duration-1000 ease-in-out">
          <div className="h-full flex items-center justify-end">
            <Menu />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
