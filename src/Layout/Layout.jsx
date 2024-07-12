import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu, MenuItem } from '@mui/material';
import { getUser, getUserById } from '../reduser/counter';
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SellIcon from "@mui/icons-material/Sell";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import img from "../assets/img/Group 1116606595.svg";
import Switcher from '../components/Switcher';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.product.dataUser);
  const dataUserById = useSelector((state) => state.product.dataUserById);
  const imgUrl = import.meta.env.VITE_APP_FILES_URL;
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col m-auto">
      <header className="bg-gray-800 text-white h-16 flex items-center justify-between px-4 fixed top-0 left-0 z-10 right-0">
        <img src={img} alt="Workflow" className="h-10 w-auto" />
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center">
            <SearchIcon sx={{ color: "#FFF" }} />
            <input
              type="text"
              className="bg-transparent text-[#FFF] w-[190px] outline-none"
              placeholder="Search..."
            />
          </div>
          <Switcher />
          <Button onClick={() => changeLanguage('en')}>Eng</Button>
          <Button onClick={() => changeLanguage('ru')}>Russian</Button>
          <Button onClick={() => changeLanguage('tj')}>Tajik</Button>
        </div>
        <div className="flex items-center">
          <Button onClick={handleClick}>
            {dataUserById?.image ? (
              <img className="w-10 h-10 rounded-full" src={`${imgUrl}${dataUserById?.image}`} alt="User" />
            ) : (
              <img className="w-10 h-10 rounded-full" src="https://yt3.ggpht.com/ytc/AKedOLT5nbr-kJXPj0aqUJ1VV0pvn5FdYCIA7TzM6pi9LQ=s900-c-k-c0x00ffffff-no-rj" alt="Default" />
            )}
          </Button>
          <span className="ml-2">{dataUserById?.userName}</span>
          <ExpandMoreIcon sx={{ color: "#fff" }} onClick={handleClick} />
        </div>
      </header>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="flex items-center gap-2 p-2 border-b">
          {dataUserById?.image ? (
            <img className="w-9 h-9 rounded-full" src={`${imgUrl}${dataUserById?.image}`} alt="User" />
          ) : (
            <img className="w-9 h-9 rounded-full" src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="Default" />
          )}
          <div className="flex flex-col">
            <h1 className="text-black font-semibold">{dataUserById?.lastName} {dataUserById?.firstName}</h1>
            <h1 className="text-gray-500">{dataUserById?.phoneNumber}</h1>
          </div>
        </div>
        <MenuItem onClick={handleClose}>
          <Link to="profile" className="flex items-center gap-2">
            <PersonIcon className="text-gray-600" />
            <h1>Profile</h1>
          </Link>
        </MenuItem>
        <MenuItem>
          <div className="flex items-center gap-2">
            <LoginIcon className="text-red-500" />
            <h1 className="text-red-500">Logout</h1>
          </div>
        </MenuItem>
      </Menu>

      <div className="flex pt-16 pg:m-auto overflow-y-auto">
        <div className=" pg:hidden bg-gray-900 text-white w-1/4 p-6 flex-col space-y-4 lg:w-1/4 md:w-1/3">
          <NavLink to="/dashboard" className={({ isActive }) => `flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <HomeIcon />
            {t('layout.dashboard')}
          </NavLink>
          <NavLink to="/dashboard/orders" className={({ isActive }) => `flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <ListIcon />
            {t('layout.order')}
          </NavLink>
          <NavLink to="/dashboard/products" className={({ isActive }) => `flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <SellIcon />
            {t('layout.product')}
          </NavLink>
          <NavLink to="/dashboard/other" className={({ isActive }) => `flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <FolderOpenIcon />
            {t('layout.other')}
          </NavLink>
        </div>

        <div className={`  bg-gray-900 text-white fixed top-16 left-0 w-full ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <div className="p-6 flex flex-col space-y-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 text-left p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              <HomeIcon />
              {t('layout.dashboard')}
            </NavLink>
            <NavLink
              to="/dashboard/orders"
              className={({ isActive }) =>
                `flex items-center gap-2 text-left p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              <ListIcon />
              {t('layout.order')}
            </NavLink>
            <NavLink
              to="/dashboard/products"
              className={({ isActive }) =>
                `flex items-center gap-2 text-left p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              <SellIcon />
              {t('layout.product')}
            </NavLink>
            <NavLink
              to="/dashboard/other"
              className={({ isActive }) =>
                `flex items-center gap-2 text-left p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
              }
              onClick={() => setIsSidebarOpen(false)}
            >
              <FolderOpenIcon />
              {t('layout.other')}
            </NavLink>
            <div className="flex flex-wrap space-x-4 mb-4">
              <input
                type="search"
                placeholder="Search..."
                className="bg-transparent border-b border-gray-500 text-gray-900 dark:text-white px-2 py-1 focus:outline-none focus:border-blue-500"
              />
              <Button onClick={() => changeLanguage('en')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                Eng
              </Button>
              <Button onClick={() => changeLanguage('ru')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                Russian
              </Button>
              <Button onClick={() => changeLanguage('tj')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                Tajik
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      <button
        className="fixed hidden pg:block bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <MenuIcon />
      </button>
    </div>
  );
};

export default Layout;
