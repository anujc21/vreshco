import React from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Button} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

function Confirmation(){
	const navigate = useNavigate();

	return (
		<Box className="page" sx={{
			width: "100%",
			minHeight: "100%",
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
			overflowY: "auto",
			background: "url(section.png)",
			backgroundSize: "cover",
			backgroundPosition: "center center",
			backgroundRepeat: "no-repeat"
		}}>
			<Box sx={{
				margin: "150px 0px 0px 0px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column"
			}}>
				<CheckCircle sx={{
					margin: "0px 0px 20px 0px",
					fontSize: "10rem",
					color: "#fff"
				}}/>

				<Typography align="center" sx={{
					width: "80%",
					fontSize: "40px",
					color: "#fff"
				}}>
					Thank you for shopping with Vreshco!
				</Typography>

				<Typography align="center" sx={{
					margin: "20px 0px 0px 0px",
					width: "80%",
					fontSize: "40px",
					color: "#fff"
				}}>
					Your order has been placed successfully!
				</Typography>

				<Button sx={{
					padding: "0px 50px",
					alignSelf: "center",
					margin: "20px 0px 50px 0px",
					height: "45px",
					borderRadius: "10px",
					color: "#fff",
					background: "#711488",
					boxShadow: "0px 8px 32px rgba(255, 255, 255, 0.5)"
				}} onClick={() => navigate("/orders")}>
					Check Orders
				</Button>
			</Box>
		</Box>
	);
}

export default Confirmation;