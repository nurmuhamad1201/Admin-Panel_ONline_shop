import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from 'react-router-dom';
import { getUserById } from '../../reduser/counter';
import { Button } from '@mui/material';
import { destroyToken } from "../../utils/token";

const Profile = () => {
    const dataUserById = useSelector((state) => state.product.dataUserById);
    const navigate = useNavigate();
    const handleLogout = () => {
        destroyToken(); 
        navigate('/');
         
       
      };
    const dispatch = useDispatch();

    console.log(dataUserById);
    useEffect(() => {
        dispatch(getUserById());
    }, [dispatch]);

    const image = import.meta.env.VITE_APP_FILES_URL;

    return (
        <>
            <div className="flex flex-col gap-[40px] p-[28px] sm:p-[20px] sm:gap-[24px] dark:bg-gray-800">
                <div className="flex justify-between">
                    <h1 className='text-[25px] font-[600] dark:text-white'>Profile</h1>
                    <button onClick={handleLogout} className='text-red-500 border-red-500 font-[600] font-serif px-[5px] py-[3px] rounded-[5px] border dark:border-red-700 dark:text-red-700'>
                        <ExitToAppIcon /> Log Out
                    </button>
                </div>

                <div className='flex items-start gap-[40px] sm:flex-col sm:gap-[24px]'>
                    <div className='flex flex-col gap-[25px] w-[557px] sm:w-[360px] sm:gap-[20px]'>
                        <div className='flex sm:flex-col sm:items-start sm:gap-[20px] bg-[rgb(255,255,255)] justify-between items-center shadow-[rgba(100,116,139,0.06)_0px_1px_1px] p-[15px] rounded-[8px] dark:bg-gray-700 dark:shadow-[rgba(255,255,255,0.06)_0px_1px_1px]'>
                            <div className='flex flex-col gap-[20px]'>
                                <div className=''>
                                    <h1 className='text-[17px] font-[600] font-["Open_Sans",_Montserrat,_Roboto] dark:text-white'>{dataUserById?.lastName} {dataUserById?.firstName}</h1>
                                    <div className='flex gap-[5px]'>
                                        <h1 className='text-[rgb(101,116,139)] text-[17px] font-[500] font-["Open_Sans",_Montserrat,_Roboto] dark:text-gray-400'>Role :</h1>
                                        <h1 className='text-[rgb(101,116,139)] text-[17px] font-[500] font-["Open_Sans",_Montserrat,_Roboto] dark:text-gray-400'>{dataUserById?.userRoles[0].name}</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <Link to={"/dashboard/editprofile"}>
                                        <button className='border border-[rgba(80,106,133,0.5)] font-[400] text-[rgb(80,106,133)] font-["Open_Sans",_Montserrat,_Roboto] rounded-[8px] p-[8px_20px] text-center dark:border-gray-500 dark:text-gray-300'>CHANGE PROFILE</button>
                                    </Link>
                                    <Button variant='text' color='error'>Delete</Button>
                                </div>
                            </div>
                            <div>
                                {
                                    dataUserById?.image === "" || dataUserById?.image == null ?
                                        <img className="w-[150px] h-[150px] rounded-[50%]" src="https://yt3.ggpht.com/ytc/AKedOLT5nbr-kJXPj0aqUJ1VV0pvn5FdYCIA7TzM6pi9LQ=s900-c-k-c0x00ffffff-no-rj" alt="" /> :
                                        <img className="w-[150px] h-[150px] rounded-[50%]" src={`${image}${dataUserById?.image}`} alt="" />
                                }
                            </div>
                        </div>
                        <div className='p-[18px] rounded-[8px] bg-[rgb(255,255,255)] shadow-[rgba(100,116,139,0.06)_0px_1px_1px] dark:bg-gray-700 dark:shadow-[rgba(255,255,255,0.06)_0px_1px_1px]'>
                            <div className='flex flex-col gap-[20px]'>
                                <div className='flex flex-col gap-[12px]'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat] dark:text-gray-300'>Registrated :</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat] dark:text-gray-300'>{dataUserById.dob}</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat] dark:text-gray-300'>Email :</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat] dark:text-gray-300'>{dataUserById.email}</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat] dark:text-gray-300'>lastName</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat] dark:text-gray-300'>{dataUserById?.lastName}</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat] dark:text-gray-300'>firstName</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat] dark:text-gray-300'>{dataUserById?.firstName}</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <h1 className='font-[600] text-[18px] dark:text-gray-300'>Phone number:</h1>
                                    <div className='flex items-center justify-between pl-[20px]'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat] dark:text-gray-300'>Admin :</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat] dark:text-gray-300'>{dataUserById.phoneNumber}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[557px] sm:w-[350px]'>
                        <div className='rounded-[8px] bg-[rgb(255,255,255)] shadow-[rgba(100,116,139,0.06)_0px_1px_1px] p-[20px] flex justify-between items-center dark:bg-gray-700 dark:shadow-[rgba(255,255,255,0.06)_0px_1px_1px]'>
                            <h1 className='text-[18px] font-[600] font-["Open_Sans",_Montserrat] dark:text-gray-300'>Account</h1>
                            <button className='border dark:text-white border-[rgba(80,106,133,0.5)] font-[400] text-[rgb(80,106,133)] font-["Open_Sans",_Montserrat,_Roboto] rounded-[8px] p-[8px_20px] text-center dark:border-gray-500 '>RESET PASSWORD</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
