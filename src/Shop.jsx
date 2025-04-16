import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Button} from "@mui/material";
import {ArrowBackIosNew} from "@mui/icons-material";
import Footer from "./Footer.jsx";

function Shop(){
	const navigate = useNavigate();

	const colors = ["#000", "#fff", "#EF4444", "#3B82F6"];

	const sizes = ["US 8", "US 9", "US 10", "US 11"];

	const shoes = ["shoe7.png", "shoe8.png", "shoe9.png", "shoe10.png"];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box className="page" sx={{
			width: "100%",
			height: "auto",
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
			overflowY: "auto",
			background: "#000"
		}}>
			<Box sx={{
				position: "relative",
				margin: "100px 0px 0px 0px",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexWrap: "wrap"
			}}>
				<Box
					sx={{
						position: "absolute",
						top: "20px",
						left: "20px",
						width: "45px",
						height: "45px",
						borderRadius: "50%",
						margin: "0px 10px 0px 0px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Box sx={{
						width: "90%",
						height: "90%",
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
					}}>
						<ArrowBackIosNew sx={{
							color: "#fff"
						}}/>
					</Box>
				</Box>

				<Box sx={{
					marginTop: {
						xs: "80px"
					},				
					display: "flex",
					justifyContent: "center",
					flexDirection: "column"
				}}>
					<Typography sx={{
						width: "300px",
						fontSize: "50px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						Vreshco Air Max 2025
					</Typography>

					<Typography sx={{
						margin: "20px 0px 0px 0px",
						fontSize: "32px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						$199.99
					</Typography>

					<Typography sx={{
						margin: "5px 0px 0px 0px",
						fontSize: "20px",
						fontWeight: "bold",
						color: "#888",
						textDecoration: "line-through"
					}}>
						$249.99
					</Typography>
				</Box>

				<Box sx={{
					width: "600px",
					height: {
						xs: "400px",
						sm: "400px",
						md: "600px",
						lg: "600px"
					},
					background: "url(ellipse.png)",
					backgroundSize: "contain",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}}>
					<Box sx={{
						width: "70%",
						height: "70%",
						background: "url(shoe6.png)",
						backgroundSize: "contain",
						backgroundPosition: "center center",
						backgroundRepeat: "no-repeat",
						display: "flex",
						alignItems: "end",
						justifyContent: "center"
					}}>
						<Box sx={{
							width: "100%",
							height: "50px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "10px"
						}}>
							{
								colors.map((color, index) => (
									<Box key={index} sx={{
										width: "30px",
										height: "30px",
										borderRadius: "50%",
										background: color,
										"&:hover": {
											cursor: "pointer",
											transform: "scale(1.2)"
										},
										transition: "0.2s transform"
									}}></Box>
								))
							}
						</Box>
					</Box>
				</Box>
			</Box>

			<Box sx={{
				width: "100%",
				height: "auto",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}>
				<Box sx={{
					maxWidth: "90%",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column"
				}}>
					<Typography sx={{
						margin: "0px 0px 10px 0px",
						fontSize: "24px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						Select Size
					</Typography>

					<Box sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "10px"
					}}>
						{
							sizes.map((size, index) => (
								<Button key={index} sx={{
									width: "150px",
									border: "3px solid #6793D7",
									background: "#000",
									color: "#fff"
								}}>
									{size}
								</Button>
							))
						}
					</Box>
				</Box>
			</Box>

			<Box sx={{
				width: "100%",
				minHeight: "500px",
				background: "url(section.png)",
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexWrap: "wrap",
				gap: "50px"
			}}>
				<Box sx={{
					width: "700px",
					height: "auto",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column"
				}}>
					<Box sx={{
						margin: "50px 0px 0px 0px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "20px"
					}}>
						{
							shoes.map((shoe, index) => (
								<Box key={index} sx={{
									width: "150px",
									height: "150px",
									border: "5px solid #fff",
									borderRadius: "10px",
									background: `url(${shoe})`,
									backgroundSize: "cover",
									backgroundPosition: "center center",
									backgroundRepeat: "no-repeat",
									"&:hover": {
										cursor: "pointer",
										transform: "scale(1.1)"
									},
									transition: "0.2s transform"
								}}></Box>
							))
						}
					</Box>

					<Typography align="center" sx={{
						maxWidth: "80%",
						margin: "30px 0px 10px 0px",
						fontSize: "20px",
						color: "#fff"
					}}>
						Experience ultimate comfort with the Nike Air Max 2025. Featuring advanced cushioning technology and breathable mesh upper, these sneakers are perfect for both athletic performance and casual wear.
					</Typography>
				</Box>

				<Box sx={{
					width: "600px",
					height: "auto",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column"
				}}>
					<Button sx={{
						width: "300px",
						height: "50px",
						background: "#711488",
						color: "#fff",
						border: "4px solid #480d57",
						borderRadius: "10px",
						boxShadow: "0px 8px 32px rgba(255, 255, 255, 0.5)"
					}} onClick={() => navigate("/payments")}>
						Buy Now
					</Button>

					<Button sx={{
						margin: "20px 0px 50px 0px",
						width: "300px",
						height: "50px",
						background: "#000",
						color: "#fff",
						border: "4px solid #480d57",
						borderRadius: "10px",
						boxShadow: "0px 8px 32px rgba(255, 255, 255, 0.5)"
					}} onClick={() => navigate("/cart")}>
						Add to Cart
					</Button>
				</Box>
			</Box>

			<Footer/>
		</Box>
	);
}

export default Shop;