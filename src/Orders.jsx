import React from "react";
import {Box, Typography, Button, Chip, Pagination} from "@mui/material";
import {ArrowBackIosNew, LocationOn, Autorenew} from "@mui/icons-material";
import Footer from "./Footer.jsx";

function Orders(){
	const orderInfos = [
		{
			name: "Total Orders",
			number: "248",
			image: "order1.png"
		},
		{
			name: "Delivered",
			number: "186",
			image: "order2.png"
		},
		{
			name: "In Transit",
			number: "42",
			image: "order3.png"
		},
		{
			name: "Cancelled",
			number: "20",
			image: "order4.png"
		}
	];

	const orders = [
		{
			number: "#12345",
			name: "Classic White Sneakers",
			size: "US 9",
			price: "$299.99",
			status: "Pending",
			statusBackground: "#FEF3C7",
			statusColor: "#B45309",
			date: "March 15, 2025",
			image: "shoe11.png"
		},
		{
			number: "#12344",
			name: "Classic White Sneakers",
			size: "US 9",
			price: "$299.99",
			status: "Delivered",
			statusBackground: "#D1FAE5",
			statusColor: "#047857",
			date: "March 10, 2025",
			image: "shoe11.png"
		},
		{
			number: "#12343",
			name: "Classic White Sneakers",
			size: "US 9",
			price: "$299.99",
			status: "Cancelled",
			statusBackground: "#FEE2E2",
			statusColor: "#B91C1C",
			date: "March 5, 2025",
			image: "shoe11.png"
		}
	];

	return (
		<Box className="page" sx={{
			width: "100%",
			height: "auto",
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
				margin: "50px 0px 0px 0px",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
				padding: "0px 10px",
				gap: "15px"
			}}>
				{
					orderInfos.map((orderInfo, index) => (
						<Box
							key={index}
							sx={{
								maxWidth: "90%",
								width: "350px",
								height: "130px",
								borderRadius: "10px",
								padding: "3px",
								background: "linear-gradient(to bottom, #cf3dff, #1c78d4)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								"&:hover": {
									cursor: "pointer",
									transform: "scale(1.05)"
								},
								transition: "0.2s transform"
							}}
						>
							<Box sx={{
								width: "100%",
								height: "100%",
								background: "#1A1A1A",
								borderRadius: "10px",
								padding: "20px 25px",
								display: "flex",
								alignItems: "center",
								flexDirection: "row"
							}}>
								<Box sx={{
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									flexDirection: "column"
								}}>
									<Typography sx={{
										fontSize: "22px",
										color: "#fff"
									}}>
										{orderInfo.name}
									</Typography>

									<Typography sx={{
										fontSize: "30px",
										fontWeight: "bold",
										color: "#fff"
									}}>
										{orderInfo.number}
									</Typography>
								</Box>

								<Box sx={{
									width: "50px",
									height: "50px",
									borderRadius: "50%",
									background: `url(${orderInfo.image})`,
									backgroundSize: "contain",
									backgroundPosition: "center center",
									backgroundRepeat: "no-repeat"
								}}></Box>
							</Box>
						</Box>
					))
				}
			</Box>

			<Box sx={{
				margin: "30px 0px 50px 0px",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				gap: "20px"
			}}>
				{
					orders.map((order, index) => (
						<Box
							key={index}
							sx={{
								width: "1465px",
								maxWidth: "95%",
								borderRadius: "10px",
								padding: "3px",
								background: "linear-gradient(to bottom right, rgba(207, 61, 255, 0.8), rgba(28, 120, 212, 0.8))",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
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
										width: "50%",
										height: "100%",
										display: "flex",
										padding: "20px 25px",
										flexDirection: "column"
									}}>
										<Box sx={{
											display: "flex",
											alignItems: "center",
											flexDirection: "row",
											gap: "20px"
										}}>
											<Typography sx={{
												fontSize: "18px",
												color: "#fff"
											}}>
												Order {order.number}
											</Typography>

											<Chip label={order.status} sx={{
												background: order.statusBackground,
												color: order.statusColor
											}}/>
										</Box>

										<Box sx={{
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

												<Typography sx={{
													margin: "5px 0px 0px 0px",
													fontSize: "22px",
													fontWeight: "bold",
													color: "#fff"
												}}>
													{order.price}
												</Typography>
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
										<Typography sx={{
											margin: "20px 20px 0px auto",
											fontSize: "18px",
											color: "#fff"
										}}>
											{order.date}
										</Typography>

										<Box sx={{
											margin: "30px 20px 20px 0px",
											display: "flex",
											alignItems: "center",
											justifyContent: "start",
											padding: {
												xs: "0px 10px",
												sx: "0px 10px",
												md: "0px 10px",
												lg: "0px 0px"
											},
											flexDirection: "row",
											flexWrap: "wrap",
											gap: "10px"
										}}>
											<Box
												sx={{
													width: "170px",
													maxWidth: "90%",
													height: "40px",
													padding: "2px",
													borderRadius: "10px",
													margin: "0px 0px 0px 10px",
													background: "linear-gradient(to right, #cf3dff, #1c78d4)",
													display: "flex",
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
												}}>
													<LocationOn sx={{
														fontSize: "1.3rem",
														margin: "0px 2px 0px 0px"
													}}/>

													Track Order
												</Button>
											</Box>

											<Button sx={{
												margin: "0px 0px 0px 10px",
												width: "170px",
												maxWidth: "90%",
												height: "40px",
												borderRadius: "10px",
												color: "#fff",
												background: "#059669"
											}}>
												<Autorenew sx={{
													fontSize: "1.3rem",
													margin: "0px 2px 0px 0px"
												}}/>

												Reorder
											</Button>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					))
				}
			</Box>

			<Pagination
				count={8} 
				sx={{
				margin: "0px 0px 40px 0px",
				"& .Mui-selected": {
					backgroundColor: "#2563EB !important",
					color: "#fff !important"
				},
				"& .MuiPaginationItem-root": {
					color: "#fff !important"
				}
  			}}/>

			<Footer/>
		</Box>
	);
}

export default Orders;