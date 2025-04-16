import React from "react";
import {useNavigate} from "react-router-dom";
import {AppBar, Toolbar, Box, Input, InputAdornment, Button} from "@mui/material";
import {Search, Home, ShoppingCart, Person, Login} from "@mui/icons-material";

function Header(){
	const navigate = useNavigate();

	return (
		<AppBar position="fixed" sx={{
			background: "#000"
		}}>
			<Toolbar>
				<Box sx={{
					minWidth: "100px",
					minHeight: "100px",
					background: "url(vreshco-logo.png)",
					backgroundSize: "contain",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat"
				}}></Box>

				<Box
					sx={{
						width: {
							lg: "600px",
							md: "400px",
							sm: "200px"
						},
						borderRadius: "10px",
						margin: "0 auto",
						padding: "2px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: {
							xs: "none",
							sm: "flex",
							md: "flex",
							lg: "flex"
						},
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Input
						placeholder="Search for shoes..."
						disableUnderline
						fullWidth
						sx={{
							borderRadius: "10px",
							background: "rgba(0, 0, 0, 0.7)",
							padding: "5px 10px",
							color: "#fff",
						    "& input::placeholder": {
						    	color: "#fff"
						    }
						}}
						endAdornment={
							<InputAdornment position="end">
								<Search sx={{
									color: "#fff",
									"&:hover": {
										cursor: "pointer"
									}
								}}/>
							</InputAdornment>
						}
					/>
				</Box>

				<Box
					sx={{
						width: "45px",
						height: "45px",
						padding: "2px",
						borderRadius: "50%",
						margin: "0px 10px 0px auto",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Box sx={{
						width: "100%",
						height: "100%",
						borderRadius: "50%",
						background: "rgba(0, 0, 0, 0.7)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						"&:hover": {
							cursor: "pointer"
						},
						"&:active": {
							background: "rgba(0, 0, 0, 0.2)"
						},
						transition: "0.2s background"
					}} onClick={() => navigate("/")}>
						<Home sx={{
							color: "#fff"
						}}/>
					</Box>
				</Box>

				<Box
					sx={{
						width: "45px",
						height: "45px",
						padding: "2px",
						borderRadius: "50%",
						margin: "0px 10px 0px 0px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Box sx={{
						width: "100%",
						height: "100%",
						borderRadius: "50%",
						background: "rgba(0, 0, 0, 0.7)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						"&:hover": {
							cursor: "pointer"
						},
						"&:active": {
							background: "rgba(0, 0, 0, 0.2)"
						},
						transition: "0.2s background"
					}} onClick={() => navigate("/cart")}>
						<ShoppingCart sx={{
							color: "#fff"
						}}/>
					</Box>
				</Box>

				<Box
					sx={{
						width: "45px",
						height: "45px",
						padding: "2px",
						borderRadius: "50%",
						margin: "0px 10px 0px 0px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Box sx={{
						width: "100%",
						height: "100%",
						borderRadius: "50%",
						background: "rgba(0, 0, 0, 0.7)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						"&:hover": {
							cursor: "pointer"
						},
						"&:active": {
							background: "rgba(0, 0, 0, 0.2)"
						},
						transition: "0.2s background"
					}} onClick={() => navigate("/profile")}>
						<Person sx={{
							color: "#fff"
						}}/>
					</Box>
				</Box>

				<Box
					sx={{
						width: "45px",
						height: "45px",
						padding: "2px",
						borderRadius: "50%",
						margin: "0px 10px 0px 0px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: {
							xs: "flex",
							sm: "flex",
							md: "none",
							lg: "none"
						},
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Box sx={{
						width: "100%",
						height: "100%",
						borderRadius: "50%",
						background: "rgba(0, 0, 0, 0.7)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						"&:hover": {
							cursor: "pointer"
						},
						"&:active": {
							background: "rgba(0, 0, 0, 0.2)"
						},
						transition: "0.2s background"
					}} onClick={() => navigate("/sign-in")}>
						<Login sx={{
							color: "#fff"
						}}/>
					</Box>
				</Box>

				<Box
					sx={{
						width: "100px",
						height: "40px",
						padding: "2px",
						borderRadius: "10px",
						margin: "0px 5px 0px 10px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: {
							xs: "none",
							sm: "none",
							md: "flex",
							lg: "flex"
						},
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Button sx={{
						width: "100%",
						height: "100%",
						borderRadius: "10px",
						color: "#fff",
						background: "rgba(0, 0, 0, 0.7)"
					}} onClick={() => navigate("/sign-in")}>
						Log in
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;