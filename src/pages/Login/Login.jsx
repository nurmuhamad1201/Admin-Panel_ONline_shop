import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../utils/axiosRequest";
import "../../App.css";
import { saveToken } from "../../utils/token";
import logo from "../../assets/img/Group 1116606595.svg"
import { FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  let API = import.meta.env.VITE_APP_API_URL;

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async () => {
      try {
        let { data } = await axiosRequest.post(
          `${API}Account/login`,
          formik.values
        );
        if (data.statusCode == 200) {

          saveToken(data.data);
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showPassword, setShowPassword] = React.useState(false);


  return (
    <div className="flex flex-wrap">
    <div className="bg h-[100vh] w-[50%] flex flex-col justify-center pl-[70px] sm:hidden xs:w-full ld:w-full">
      <h1 className="text-white text-2xl font-medium sm:text-base">Welcome to admin panel</h1>
      <img className="w-[344px] sm:w-[200px]" src={logo} alt="" />
    </div>
    <div className="w-[50%] flex flex-col gap-2.5 justify-center items-center sm:hidden xs:w-full ld:w-full">
      <h1 className="text-[#111927] text-2xl font-bold">Log in</h1>
      <div className="w-[50%] text-center xs:w-full ld:w-full">
        <form className="flex flex-col justify-center gap-2.5" onSubmit={formik.handleSubmit}>
          <TextField
            id="outlined-basic"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            placeholder="userName"
            variant="outlined"
          />
          <FormControl variant="outlined">
            <OutlinedInput
              placeholder="Password"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <input
            value={"Forget Password?"}
            className="w-[80%] sm:w-[90%] text-blue-600 text-lg font-semibold block mx-auto bg-transparent h-15 mt-2.5"
            type="button"
          />
          <button
            type="submit"
            className="w-[80%] cursor-pointer sm:w-[90%] text-lg font-semibold text-white block mx-auto bg-blue-600 rounded h-15"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  
    <div className="bg py-5 hidden flex-col justify-center gap-10 w-[400px] h-screen sm:flex xs:w-full ld:w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl font-medium sm:text-base">Welcome to admin panel</h1>
        <img className="w-[150px]" src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-2.5 sm:w-full">
        <h1 className="text-white text-center text-2xl font-bold sm:text-base">Log in</h1>
        <form className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
          <TextField
            id="outlined-basic"
            sx={{ backgroundColor: "#FFF", margin: "10px 0", width: "65%", borderRadius: "4px" }}
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            placeholder="userName"
            variant="outlined"
          />
          <FormControl variant="outlined">
            <OutlinedInput
              sx={{ backgroundColor: "#FFF" }}
              placeholder="Password"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <input
            value={"Forget Password?"}
            className="w-[80%] sm:w-[70%] text-blue-600 text-lg font-semibold block mx-auto bg-transparent h-15 mt-2.5"
            type="button"
          />
          <button
            type="submit"
            className="w-[80%] cursor-pointer sm:w-[70%] text-lg font-semibold text-white block mx-auto bg-blue-600 rounded h-15 mt-7.5"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  </div>
  
  
  );
};

export default Login;
