import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider, CssBaseline, Box} from "@mui/material";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Shop from "./Shop.jsx";
import Orders from "./Orders.jsx";
import Cart from "./Cart.jsx";
import Payments from "./Payments.jsx";
import Profile from "./Profile.jsx";
import Confirmation from "./Confirmation.jsx";
import "./App.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000"
        },
        secondary: {
            main: "#ffffff"
        }
    }
});

function App(){
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <Box sx={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "#000"
            }}>
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/sign-in" element={<SignIn/>}/>

                    <Route path="/sign-up" element={<SignUp/>}/>

                    <Route path="/shop" element={<Shop/>}/>

                    <Route path="/orders" element={<Orders/>}/>

                    <Route path="/cart" element={<Cart/>}/>

                    <Route path="/payments" element={<Payments/>}/>

                    <Route path="/profile" element={<Profile/>}/>

                    <Route path="/confirmation" element={<Confirmation/>}/>
                </Routes>
            </Box>
        </ThemeProvider>
    );
}

export default App;