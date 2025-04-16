import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Input, InputAdornment, Button, Divider} from "@mui/material";
import {MailOutline, LockOutline, Visibility, Google, Facebook} from "@mui/icons-material";

function SignIn(){
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Box className="page" sx={{
			width: "100%",
			minHeight: "100vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			overflowY: "auto",
			background: "url(section.png)",
			backgroundSize: "cover",
			backgroundPosition: "center center",
			backgroundRepeat: "no-repeat",
			padding: "20px"
		}}>
			<Box sx={{
				margin: "120px 0px 60px 0px",
				width: "100%",
				maxWidth: "500px",
				borderRadius: "10px",
				padding: "3px",
				background: "linear-gradient(to bottom, #cf3dff, #1c78d4)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}>
				<Box sx={{
					padding: "30px 50px",
					width: "100%",
					background: "#1A1A1A",
					borderRadius: "10px",
					display: "flex",
					flexDirection: "column"
				}}>
					<Typography align="center" sx={{
						fontSize: "32px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						Log in
					</Typography>

					<Typography align="center" sx={{
						margin: "10px 0",
						fontSize: "18px",
						color: "#ccc"
					}}>
						Missed us? We’ve got fresh kicks waiting for you!
					</Typography>

					<Box sx={{
						margin: "20px auto 0",
						width: "100%",
						borderRadius: "10px",
						padding: "2px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}>
						<Input
							placeholder="Email or Phone Number"
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
							startAdornment={
								<InputAdornment position="start">
									<MailOutline sx={{ color: "#ccc" }} />
								</InputAdornment>
							}
						/>
					</Box>

					<Box sx={{
						margin: "20px auto 0",
						width: "100%",
						borderRadius: "10px",
						padding: "2px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}>
						<Input
							placeholder="Password"
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
							startAdornment={
								<InputAdornment position="start">
									<LockOutline sx={{ color: "#ccc" }} />
								</InputAdornment>
							}
							endAdornment={
								<InputAdornment position="end">
									<Visibility sx={{ color: "#ccc" }} />
								</InputAdornment>
							}
						/>
					</Box>

					<Typography align="right" sx={{
						margin: "25px 0 0 0",
						fontSize: "16px",
						color: "#2563EB",
						"&:hover": {
							cursor: "pointer"
						}
					}}>
						Forgot Password?
					</Typography>

					<Box sx={{
						alignSelf: "center",
						width: "100%",
						padding: "2px",
						borderRadius: "10px",
						marginTop: "20px",
						background: "linear-gradient(to right, #cf3dff, #1c78d4)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}>
						<Button sx={{
							width: "100%",
							height: "100%",
							borderRadius: "10px",
							color: "#fff",
							background: "#711488"
						}}>
							Sign In
						</Button>
					</Box>

					<Divider sx={{
						alignSelf: "center",
						width: "100%",
						margin: "20px 0 10px 0",
						background: "#fff"
					}} />

					<Typography align="center" sx={{
						margin: "5px 0 10px 0",
						fontSize: "16px",
						color: "#ccc",
						"&:hover": {
							cursor: "pointer"
						}
					}}>
						Or continue with
					</Typography>

					<Box sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: { xs: "column", sm: "row" },
						gap: "10px",
						padding: "10px 0"
					}}>
						<Box sx={{
							width: "100%",
							padding: "2px",
							borderRadius: "10px",
							background: "linear-gradient(to right, #cf3dff, #1c78d4)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}>
							<Button sx={{
								width: "100%",
								height: "100%",
								borderRadius: "10px",
								color: "#fff",
								background: "#1A1A1A"
							}}>
								<Google sx={{
									fontSize: "1.3rem",
									marginRight: "5px",
									color: "#EF4444"
								}} />
								Google
							</Button>
						</Box>

						<Box sx={{
							width: "100%",
							padding: "2px",
							borderRadius: "10px",
							background: "linear-gradient(to right, #cf3dff, #1c78d4)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}>
							<Button sx={{
								width: "100%",
								height: "100%",
								borderRadius: "10px",
								color: "#fff",
								background: "#1A1A1A"
							}}>
								<Facebook sx={{
									fontSize: "1.3rem",
									marginRight: "5px",
									color: "#2563EB"
								}} />
								Facebook
							</Button>
						</Box>
					</Box>

					<Typography align="center" sx={{
						margin: "20px 0 0 0",
						fontSize: "16px",
						color: "#ccc"
					}}>
						Don't have an account?{" "}
						<span style={{
							fontWeight: "bold",
							cursor: "pointer",
							color: "#2563EB"
						}} onClick={() => navigate("/sign-up")}>
							Sign up
						</span>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default SignIn;