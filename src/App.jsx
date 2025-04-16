import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider, CssBaseline, Box} from "@mui/material";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
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

                    <Route path="/shop" element={<Shop/>}/>
                </Routes>
            </Box>
        </ThemeProvider>
    );
}

export default App;