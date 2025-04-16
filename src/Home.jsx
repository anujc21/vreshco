import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Typography, Input, Divider} from "@mui/material";
import {Call, Mail, LocationOn, Facebook, Instagram, Twitter} from "@mui/icons-material";

function Home(){
	const navigate = useNavigate();

	const products = [
		{
			image: "shoe2.png",
			name: "Speed Runner",
			price: "$139.99"
		},
		{
			image: "shoe3.png",
			name: "Speed Runner",
			price: "$139.99"
		},
		{
			image: "shoe4.png",
			name: "Speed Runner",
			price: "$139.99"
		},
		{
			image: "shoe5.png",
			name: "Speed Runner",
			price: "$139.99"
		},
		{
			image: "shoe3.png",
			name: "Speed Runner",
			price: "$139.99"
		}
	];

	const categories = [
		{
			image: "category1.png",
			name: "Sneakers"
		},
		{
			image: "category2.png",
			name: "Sandals"
		},
		{
			image: "category3.png",
			name: "Formal"
		},
		{
			image: "category4.png",
			name: "Sports"
		}
	];

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
				margin: "100px 0px 0px 0px",
				width: "100%",
				height: "500px",
				background: "url(section.png)",
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}>
				<Box
					sx={{
						maxWidth: "90%",
						margin: "100px 0px 150px 0px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column"
					}}
				>
					<Box
						sx={{
							alignSelf: "start",
							width: {
								xs: "200px",
								sm: "400px",
								md: "450px"
							},
							height: {
								xs: "100px",
								sm: "130px",
								md: "150px"
							},
							background: "url(text1.png)",
							backgroundSize: "cover",
							backgroundPosition: "center center",
							backgroundRepeat: "no-repeat"
						}}
					></Box>

					<Box
						sx={{
							alignSelf: "end",
							width: {
								xs: "150px",
								sm: "180px",
								md: "200px"
							},
							height: {
								xs: "60px",
								sm: "70px",
								md: "80px"
							},
							background: "url(text2.png)",
							backgroundSize: "cover",
							backgroundPosition: "center center",
							backgroundRepeat: "no-repeat"
						}}
					></Box>

					<Box
						sx={{
							marginTop: "20px",
							alignSelf: "end",
							width: {
								xs: "300px",
								sm: "350px",
								md: "400px"
							},
							height: { 
								xs: "10px",
								sm: "12px",
								md: "15px" 
							},
							background: "url(text3.png)",
							backgroundSize: "cover",
							backgroundPosition: "center center",
							backgroundRepeat: "no-repeat",
						}}
					></Box>

					<Button
						sx={{
							alignSelf: {
								xs: "center",
								sm: "center",
								md: "start",
								lg: "start"
							},
							margin: "20px 0px 0px 0px",
							marginLeft: {
								xs: "0px",
								sm: "0px",
								md: "45px",
								lg: "45px"
							},
							width: { 
								xs: "120px",
								sm: "140px",
								md: "150px"
							},
							height: { 
								xs: "35px",
								md: "40px"
							},
							fontSize: { 
								xs: "0.8rem",
								md: "1rem"
							},
							border: "3px solid #4c165e",
							borderRadius: "10px",
							background: "#000",
							color: "#fff"
						}}
						onClick={() => navigate("/shop")}
					>
						Shop now
					</Button>

					<Box sx={{
						margin: "50px 0px 0px 0px",
						width: "200px",
						height: "150px",
						background: "url(shoe1.png)",
						backgroundSize: "cover",
						backgroundPosition: "center center",
						backgroundRepeat: "no-repeat",
						display: {
							xs: "flex",
							sm: "flex",
							md: "none",
							lg: "none"
						}
					}}></Box>
				</Box>

				<Box sx={{
					margin: "0px 20px 0px 10rem",
					width: "500px",
					height: "90%",
					background: "url(shoe1.png)",
					backgroundSize: {
						md: "contain",
						lg: "cover"
					},
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					display: {
						xs: "none",
						sm: "none",
						md: "flex",
						lg: "flex"
					}
				}}></Box>
			</Box>

			<Box sx={{
				margin: "50px 0px 0px 0px",
				width: "100%",
				height: "500px",
				background: "url(section.png)",
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				flexDirection: "column"
			}}>
				<Typography sx={{
					margin: "20px 0px 0px 30px",
					fontSize: "24px",
					fontWeight: "bold",
					color: "#fff"
				}}>
					Featured Products
				</Typography>

				<Box className="products" sx={{
					alignSelf: "center",
					padding: "0px 50px",
					margin: "0px 0px 20px 0px",
					width: "90%",
					height: "90%",
					display: "flex",
					alignItems: "center",
					gap: "50px",
					overflowX: "auto"
				}}>
					{	
						products.map((product, index) => (
							<Box key={index} sx={{
								minWidth: "250px",
								height: "80%",
								background: "rgba(0, 0, 0, 0.6)",
								borderRadius: "20px",
								border: "2px solid #4c165e",
								boxShadow: "0px 8px 32px rgba(28, 120, 212, 0.8)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								"&:hover": {
									cursor: "pointer",
									transform: "scale(1.05)"
								},
								transition: "0.2s transform"
							}} onClick={() => navigate("/shop")}>
								<Box sx={{
									borderRadius: "10px 10px 0px 0px",
									width: "100%",
									height: "80%",
									background: `url(${product.image})`,
									backgroundSize: "contain",
									backgroundPosition: "center center",
									backgroundRepeat: "no-repeat"
								}}></Box>
							
								<Box sx={{
									padding: "10px",
									borderRadius: "0px 0px 20px 20px",
									width: "100%",
									flexGrow: "1",
									background: "radial-gradient(ellipse, rgba(75, 85, 99, 0.7) 0%, #000 90%)"
								}}>
									<Typography sx={{
										margin: "0px 0px 0px 5px",
										fontWeight: "bold",
										fontSize: "20px",
										color: "#bbb"
									}}>
										{product.name}
									</Typography>

									<Typography sx={{
										margin: "0px 0px 0px 5px",
										fontSize: "20px",
										color: "#bbb"
									}}>
										{product.price}
									</Typography>
								</Box>
							</Box>
						))
					}
				</Box>
			</Box>

			<Box sx={{
				margin: "50px 0px 0px 0px",
				width: "100%",
				height: "500px",
				background: "url(section.png)",
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				flexDirection: "column"
			}}>
				<Typography sx={{
					margin: "20px 0px 0px 30px",
					fontSize: "24px",
					fontWeight: "bold",
					color: "#fff"
				}}>
					Categories
				</Typography>

				<Box className="products" sx={{
					alignSelf: "center",
					padding: "0px 50px",
					margin: "0px 0px 20px 0px",
					width: "90%",
					height: "90%",
					display: "flex",
					alignItems: "center",
					gap: "50px",
					overflowX: "auto"
				}}>
					{	
						categories.map((category, index) => (
							<Box key={index} sx={{
								minWidth: "350px",
								height: "70%",
								background: `url(${category.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center center",
								backgroundRepeat: "no-repeat",
								borderRadius: "20px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								"&:hover": {
									cursor: "pointer",
									transform: "scale(1.05)"
								},
								transition: "0.2s transform"
							}} onClick={() => navigate("/shop")}>
								<Box sx={{
									borderRadius: "20px",
									width: "100%",
									height: "100%",
									background: "rgba(0, 0, 0, 0.5)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center"
								}}>
									<Typography sx={{
										fontSize: "22px",
										fontWeight: "bold",
										color: "#fff"
									}}>
										{category.name}
									</Typography>
								</Box>
							</Box>
						))
					}
				</Box>
			</Box>

			<Box sx={{
				margin: "50px 0px 0px 0px",
				width: "100%",
				height: "500px",
				background: "url(section.png)",
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				flexDirection: "column"
			}}>
				<Typography sx={{
					margin: "20px 0px 0px 30px",
					fontSize: "24px",
					fontWeight: "bold",
					color: "#fff"
				}}>
					Best Sellers
				</Typography>

				<Box className="products" sx={{
					alignSelf: "center",
					padding: "0px 50px",
					margin: "0px 0px 20px 0px",
					width: "90%",
					height: "90%",
					display: "flex",
					alignItems: "center",
					gap: "50px",
					overflowX: "auto"
				}}>
					{	
						products.map((product, index) => (
							<Box key={index} sx={{
								minWidth: "250px",
								height: "80%",
								background: "rgba(0, 0, 0, 0.6)",
								borderRadius: "20px",
								border: "2px solid #4c165e",
								boxShadow: "0px 8px 32px rgba(28, 120, 212, 0.8)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								"&:hover": {
									cursor: "pointer",
									transform: "scale(1.05)"
								},
								transition: "0.2s transform"
							}} onClick={() => navigate("/shop")}>
								<Box sx={{
									borderRadius: "10px 10px 0px 0px",
									width: "100%",
									height: "80%",
									background: `url(${product.image})`,
									backgroundSize: "contain",
									backgroundPosition: "center center",
									backgroundRepeat: "no-repeat"
								}}></Box>
							
								<Box sx={{
									padding: "10px",
									borderRadius: "0px 0px 20px 20px",
									width: "100%",
									flexGrow: "1",
									background: "radial-gradient(ellipse, rgba(75, 85, 99, 0.7) 0%, #000 90%)"
								}}>
									<Typography sx={{
										margin: "0px 0px 0px 5px",
										fontWeight: "bold",
										fontSize: "20px",
										color: "#bbb"
									}}>
										{product.name}
									</Typography>

									<Typography sx={{
										margin: "0px 0px 0px 5px",
										fontSize: "20px",
										color: "#bbb"
									}}>
										{product.price}
									</Typography>
								</Box>
							</Box>
						))
					}
				</Box>
			</Box>

			<Box sx={{
				width: "100%",
				height: "auto",
				display: "flex",
				alignItems: "center",
				flexDirection: "column"
			}}>
				<Typography align="center" sx={{
					margin: "40px 20px 0px 20px",
					fontSize: "32px",
					fontWeight: "bold",
					color: "#fff"
				}}>
					Stay Updated!
				</Typography>

				<Typography align="center" sx={{
					margin: "20px 20px 0px 20px",
					fontSize: "20px",
					color: "#ccc"
				}}>
					Subscribe to our newsletter for exclusive offers and updates.
				</Typography>

				<Box sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: "30px 0px 60px 0px"
				}}>
					<Box
						sx={{
							width: {
								lg: "400px",
								md: "300px"
							},
							borderRadius: "10px 0px 0px 10px",
							margin: "0px auto 0px auto",
							padding: "2px",
							background: "linear-gradient(to right, #cf3dff, #1c78d4)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						<Input
							placeholder="Enter your email"
							disableUnderline
							fullWidth
							sx={{
								borderRadius: "10px 0px 0px 10px",
								background: "rgba(0, 0, 0, 0.7)",
								padding: "5px 10px",
								color: "#fff",
							    "& input::placeholder": {
							    	color: "#fff"
							    }
							}}
						/>
					</Box>

					<Button sx={{
						margin: "0px 0px 0px 10px",
						width: "120px",
						height: "45px",
						borderRadius: "0px 10px 10px 0px",
						color: "#fff",
						background: "#711488"
					}}>
						Subscribe
					</Button>
				</Box>
			</Box>

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
							ShoeStyle
						</Typography>

						<Typography sx={{
							margin: "15px 0px 0px 0px",
							fontSize: "16px",
							color: "#ccc"
						}}>
							Your premier destination for quality footwear.
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

					<Box sx={{
						width: "300px"
					}}>
						<Typography sx={{
							fontSize: "22px",
							fontWeight: "bold",
							color: "#fff"
						}}>
							Quick Links
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
							About Us
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
							Contact
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
							Blog
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
							FAQs
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
							Policies
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
							Privacy Policies
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
							Terms of Service
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
							Shipping Policy
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
					</Box>

					<Box sx={{
						width: "300px"
					}}>
						<Typography sx={{
							fontSize: "22px",
							fontWeight: "bold",
							color: "#fff"
						}}>
							Contact Us
						</Typography>

						<Typography sx={{
							margin: "15px 0px 0px 0px",
							fontSize: "16px",
							color: "#ccc"
						}}>
							<Call sx={{
								margin: "0px 2px -4px 0px",
								fontSize: "1.2rem"
							}}/>

							1-800-SHOES
						</Typography>

						<Typography sx={{
							margin: "15px 0px 0px 0px",
							fontSize: "16px",
							color: "#ccc"
						}}>
							<Mail sx={{
								margin: "0px 5px -5px 0px",
								fontSize: "1.2rem"
							}}/>

							support@shoestyle.com
						</Typography>

						<Typography sx={{
							margin: "15px 0px 0px 0px",
							fontSize: "16px",
							color: "#ccc"
						}}>
							<LocationOn sx={{
								margin: "0px 2px -4px 0px",
								fontSize: "1.2rem"
							}}/>

							123 Shoe Street, Fashion District
						</Typography>
					</Box>
				</Box>

				<Divider sx={{
					height: "2px",
					margin: "30px 0px 30px 0px",
					background: "#374151"
				}}/>

				<Typography align="center" sx={{
					fontSize: "16px",
					color: "#ccc"
				}}>
					© 2025 ShoeStyle. All rights reserved.
				</Typography>
			</Box>
		</Box>
	);
}

export default Home;