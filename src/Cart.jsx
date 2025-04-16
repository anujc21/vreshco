import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Button, ButtonGroup, Input, Divider} from "@mui/material";
import {ArrowBackIosNew, Delete} from "@mui/icons-material";
import Footer from "./Footer.jsx";

function Cart(){
	const navigate = useNavigate();

	const [orders, setOrders] = useState([
		{
			number: "#12345",
			name: "Classic White Sneakers",
			size: "US 9",
			price: "$129.00",
			image: "shoe11.png",
			quantity: 1
		},
		{
			number: "#12344",
			name: "Classic White Sneakers",
			size: "US 9",
			price: "$129.00",
			image: "shoe11.png",
			quantity: 1
		},
		{
			number: "#12343",
			name: "Classic White Sneakers",
			size: "US 9",
			price: "$129.00",
			image: "shoe11.png",
			quantity: 1
		}
	]);

	const updateQuantity = (index, delta) => {
		setOrders(orders.map((order, i) =>
			i === index
				? {
					...order, quantity: Math.max(1, order.quantity + delta)
				}
				: order
		));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
			<Box
				sx={{
					alignSelf: "start",
					width: "45px",
					height: "45px",
					borderRadius: "50%",
					margin: "130px 0px 0px 20px",
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
				maxWidth: "95%",
				display: "flex",
				alignItems: "start",
				justifyContent: "center",
				flexDirection: "row",
				flexWrap: "wrap",
				padding: "0px 10px",
				gap: "50px",
				margin: "0px 0px 80px 0px"
			}}>
				<Box sx={{
					width: "800px",
					maxWidth: "100%",
					margin: "30px 0px 0px 0px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					gap: "20px"
				}}>
					<Box sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column"
					}}>
						<Typography sx={{
							fontSize: "32px",
							fontWeight: "bold",
							color: "#fff"
						}}>
							Shopping Cart
						</Typography>

						<Typography sx={{
							fontSize: "20px",
							color: "#ccc"
						}}>
							{orders.length} items in your cart
						</Typography>
					</Box>

					{
						orders.map((order, index) => (
							<Box
								key={index}
								sx={{
									width: "100%",
									borderRadius: "10px",
									padding: "3px",
									background: "linear-gradient(to bottom right, rgba(207, 61, 255, 0.8), rgba(28, 120, 212, 0.8))",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexGrow: "1"
								}}
							>
								<Box sx={{
									width: "100%",
									height: "100%",
									background: "rgba(0, 0, 0, 0.4)",
									borderRadius: "10px",
									display: "flex",
									alignItems: "center",
									flexDirection: "row"
								}}>
									<Box sx={{
										width: "100%",
										height: "100%",
										display: "flex",
										flexDirection: {
											xs: "column",
											sm: "column",
											md: "row",
											lg: "row"
										}
									}}>
										<Box sx={{
											width: "100%",
											height: "100%",
											display: "flex",
											padding: "20px 25px",
											flexDirection: "column"
										}}>
											<Box sx={{
												width: "100%",
												margin: "10px 0px 0px 0px",
												display: "flex",
												alignItems: "center",
												flexDirection: "row"
											}}>
												<Box sx={{
													minWidth: "120px",
													minHeight: "120px",
													background: "url(shoe11.png)",
													backgroundSize: "contain",
													backgroundPosition: "center center",
													backgroundRepeat: "no-repeat"
												}}></Box>

												<Box sx={{
													width: "100%",
													display: "flex",
													justifyContent: "center",
													flexDirection: "column",
													padding: "0px 20px",
												}}>
													<Typography sx={{
														fontSize: "20px",
														fontWeight: "bold",
														color: "#fff"
													}}>
														{order.name}
													</Typography>

													<Typography sx={{
														fontSize: "18px",
														color: "#fff"
													}}>
														Size: {order.size}
													</Typography>

													<ButtonGroup sx={{
														margin: "5px 0px 0px 0px",
														"& .MuiButton-root": {
															borderColor: "#fff"
														}
													}}>
														<Button sx={{
															color: "#fff"
														}} onClick={() => updateQuantity(index, -1)}>
															-
														</Button>

														<Button sx={{
															color: "#fff"
														}}>
															{order.quantity}
														</Button>

														<Button sx={{
															color: "#fff"
														}} onClick={() => updateQuantity(index, 1)}>
															+
														</Button>
													</ButtonGroup>
												</Box>
											</Box>
										</Box>

										<Box sx={{
											width: {
												md: "50%",
												lg: "50%"
											},
											display: "flex",
											alignItems: {
												xs: "center",
												sm: "center",
												md: "end",
												lg: "end"
											},
											flexDirection: "column"
										}}>
											<Delete sx={{
												margin: "30px 30px 0px auto",
												fontSize: "2rem",
												color: "#fff",
												"&:hover": {
													cursor: "pointer",
													transform: "scale(1.1)"
												},
												"&:active": {
													transform: "scale(0.8)"	
												},
												transition: "0.2s transform"
											}}/>

											<Typography sx={{
												margin: "30px 30px 20px auto",
												fontSize: "20px",
												fontWeight: "bold",
												color: "#fff"
											}}>
												{order.price}
											</Typography>
										</Box>
									</Box>
								</Box>
							</Box>
						))
					}
				</Box>

				<Box
					sx={{
						margin: "30px 0px 0px 0px",
						marginTop: {
							lg: "130px"
						},
						borderRadius: "10px",
						padding: "3px",
						background: "linear-gradient(to bottom, #cf3dff, #1c78d4)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Box sx={{
						width: "100%",
						height: "100%",
						background: "#1A1A1A",
						borderRadius: "10px",
						padding: "20px 25px",
						display: "flex",
						flexDirection: "column"
					}}>
						<Typography sx={{
							fontSize: "24px",
							fontWeight: "bold",
							color: "#fff"
						}}>
							Order Summary
						</Typography>

						<Box sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "row",
							flexWrap: "wrap",
							margin: "20px 0px 0px 0px",
							gap: "10px"
						}}>
							<Box
								sx={{
									borderRadius: "10px",
									padding: "2px",
									background: "linear-gradient(to right, #cf3dff, #1c78d4)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexGrow: "1"
								}}
							>
								<Input
									placeholder="Enter coupon code"
									disableUnderline
									fullWidth
									sx={{
										borderRadius: "10px",
										background: "#fff",
										padding: "5px 10px",
										color: "#000",
									    "& input::placeholder": {
									    	color: "#000"
									    }
									}}
								/>
							</Box>

							<Button sx={{
								width: "100px",
								maxWidth: "90%",
								height: "45px",
								borderRadius: "10px",
								color: "#fff",
								background: "#711488"
							}}>
								Apply
							</Button>
						</Box>

						<Box sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "row",
							flexWrap: "wrap",
							margin: "20px 0px 0px 0px",
							gap: "10px"
						}}>
							<Typography sx={{
								fontSize: "18px",
								color: "#fff"
							}}>
								Subtotal
							</Typography>

							<Typography sx={{
								margin: "0px 0px 0px auto",
								fontSize: "18px",
								color: "#fff"
							}}>
								$247.00
							</Typography>
						</Box>

						<Box sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "row",
							flexWrap: "wrap",
							margin: "10px 0px 0px 0px",
							gap: "10px"
						}}>
							<Typography sx={{
								fontSize: "18px",
								color: "#fff"
							}}>
								Shipping
							</Typography>

							<Typography sx={{
								margin: "0px 0px 0px auto",
								fontSize: "18px",
								color: "#fff"
							}}>
								$9.99
							</Typography>
						</Box>

						<Box sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "row",
							flexWrap: "wrap",
							margin: "10px 0px 0px 0px",
							gap: "10px"
						}}>
							<Typography sx={{
								fontSize: "18px",
								color: "#fff"
							}}>
								Tax
							</Typography>

							<Typography sx={{
								margin: "0px 0px 0px auto",
								fontSize: "18px",
								color: "#fff"
							}}>
								$24.70
							</Typography>
						</Box>

						<Divider sx={{
							margin: "20px 0px 10px 0px",
							background: "#fff"
						}}/>

						<Box sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "row",
							flexWrap: "wrap",
							margin: "10px 0px 0px 0px",
							gap: "10px"
						}}>
							<Typography sx={{
								fontSize: "20px",
								fontWeight: "bold",
								color: "#fff"
							}}>
								Total
							</Typography>

							<Typography sx={{
								margin: "0px 0px 0px auto",
								fontSize: "20px",
								fontWeight: "bold",
								color: "#fff"
							}}>
								$281.69
							</Typography>
						</Box>

						<Button sx={{
							alignSelf: "center",
							margin: "20px 0px 0px 0px",
							width: "100%",
							height: "45px",
							borderRadius: "10px",
							color: "#fff",
							background: "#711488"
						}} onClick={() => navigate("/payments")}>
							Proceed to Checkout
						</Button>
					</Box>
				</Box>
			</Box>

			<Footer/>
		</Box>
	);
}

export default Cart;