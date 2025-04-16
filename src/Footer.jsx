import React from "react";
import {Box, Typography} from "@mui/material";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";

function Footer(){
	return (
		<Box sx={{
			padding: "40px 60px",
			width: "100%",
			height: "auto",
			background: "#1F2937",
			display: "flex",
			justifyContent: "center",
			flexDirection: "column"
		}}>
			<Box sx={{
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
				gap: "50px"
			}}>
				<Box sx={{
					width: "300px"
				}}>
					<Typography sx={{
						fontSize: "22px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						About Us
					</Typography>

					<Typography sx={{
						margin: "15px 0px 0px 0px",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer",
							filter: "brightness(1.5)"
						}
					}}>
						Out Story
					</Typography>

					<Typography sx={{
						margin: "5px 0px 0px 0px",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer",
							filter: "brightness(1.5)"
						}
					}}>
						Careers
					</Typography>
				</Box>

				<Box sx={{
					width: "300px"
				}}>
					<Typography sx={{
						fontSize: "22px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						Support
					</Typography>

					<Typography sx={{
						margin: "15px 0px 0px 0px",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer",
							filter: "brightness(1.5)"
						}
					}}>
						Help Center
					</Typography>

					<Typography sx={{
						margin: "5px 0px 0px 0px",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer",
							filter: "brightness(1.5)"
						}
					}}>
						Returns
					</Typography>

					<Typography sx={{
						margin: "5px 0px 0px 0px",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer",
							filter: "brightness(1.5)"
						}
					}}>
						Shipping Info
					</Typography>
				</Box>

				<Box sx={{
					width: "300px"
				}}>
					<Typography sx={{
						fontSize: "22px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						Legal
					</Typography>

					<Typography sx={{
						margin: "15px 0px 0px 0px",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer",
							filter: "brightness(1.5)"
						}
					}}>
						Terms
					</Typography>

					<Typography sx={{
						margin: "5px 0px 0px 0px",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer",
							filter: "brightness(1.5)"
						}
					}}>
						Privacy
					</Typography>

					<Typography sx={{
						margin: "5px 0px 0px 0px",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer",
							filter: "brightness(1.5)"
						}
					}}>
						Cookies
					</Typography>
				</Box>

				<Box sx={{
					width: "300px"
				}}>
					<Typography sx={{
						fontSize: "22px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						Connect
					</Typography>

					<Box sx={{
						margin: "20px 0px 0px 0px",
						display: "flex",
						alignItems: "center",
						justifyContent: "start"
					}}>
						<Facebook sx={{
							color: "#ccc",
							fontSize: "1.2rem",
							"&:hover": {
								cursor: "pointer",
								filter: "brightness(1.5)"
							}
						}}/>

						<Instagram sx={{
							margin: "0px 30px 0px 30px",
							color: "#ccc",
							fontSize: "1.2rem",
							"&:hover": {
								cursor: "pointer",
								filter: "brightness(1.5)"
							}
						}}/>

						<Twitter sx={{
							color: "#ccc",
							fontSize: "1.2rem",
							"&:hover": {
								cursor: "pointer",
								filter: "brightness(1.5)"
							}
						}}/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;