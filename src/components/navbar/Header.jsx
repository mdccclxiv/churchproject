import React, { useState,useEffect,useRef } from 'react';
import { AiOutlinePlayCircle, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import { LiaDonateSolid } from 'react-icons/lia';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hamburger, setHamburger] = useState(true);

  function openMenu() {
    setHamburger(!hamburger);
  }
   const closeMenu=()=>{
        setHamburger(true)
    }

  useEffect(() => {
    document.body.style.overflowY = hamburger ? 'auto' : 'hidden';
  }, [hamburger]);

    

    const element = useRef()
    const openElement = useRef()

   useEffect(() => {
  document.addEventListener("click", handleclick, true);

  return () => {
    document.removeEventListener("click", handleclick, true);
  };
}, [hamburger]);

    const handleclick = (e)=>{
        element.current.contains(e.target) ? 
        openMenu()
        :
        !openElement.current.contains(e.target) && closeMenu()
    }
     const backgroundImageUrl = `${import.meta.env.BASE_URL}public/assets/images/church1.avif`;

  return (
    <div className="flex flex-col w-full">
      <div className="flex fixed top-0 left-0 w-full z-50   bg-black/50 backdrop-blur-sm p-1 md:p-3 text-white text-sm">
        <div className="w-full flex mx-auto max-w-6xl justify-between">
          <div className="flex">
            <section className="flex m-1 hover:cursor-pointer hover:text-purple-800 ease-in-out">
              <AiOutlinePlayCircle size={25} />
              <span className="hidden md:flex m-auto mx-1">watch</span>
            </section>
            <section className="flex m-1 hover:cursor-pointer hover:text-purple-800 ease-in-out">
              <AiOutlineSearch size={25} />
              <span className="hidden md:flex m-auto mx-1">search</span>
            </section>
          </div>
          <div className="flex">
            <span className="text-lg font-normal font-mono my-auto m-1 hidden md:flex">GETHSEMANE LIFE CHURCH</span>
            <span className="text-xl font-normal font-mono my-auto m-1 md:hidden">GLC</span>
          </div>
          <div className="flex">
            <Link to="/churchproject/login" className="flex m-1  hover:cursor-pointer hover:text-purple-800 ease-in-out">
              <RiAccountCircleLine size={25} />
              <span className="hidden md:flex m-auto mx-1">Account</span>
            </Link>
            <section className="flex m-1  hover:cursor-pointer hover:text-purple-800 ease-in-out">
              <LiaDonateSolid size={25} />
              <span className="hidden md:flex m-auto mx-1">Give</span>
            </section>
            <section ref={element} className="flex m-1  hover:cursor-pointer hover:text-purple-800 ease-in-out">
              {hamburger ? (
                <AiOutlineMenu className="md:flex my-auto m-1" size={25} />
              ) : (
                <AiOutlineClose className="md:flex my-auto m-1" size={25} />
              )}
            </section>
          </div>
        </div>
      </div>
     <div ref={openElement} className="w-full h-screen pt-9 ease-in-out duration-700 bg-cover bg-no-repeat bg-center z-40 fixed" style={{ display: !hamburger ? "block" : "none", backgroundImage: `url(${backgroundImageUrl})` }}>
        <Menu />
      </div>
      
    </div>
  );
};

export default Header;