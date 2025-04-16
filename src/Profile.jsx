import React, {useEffect} from "react";
import {Box, Button, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Footer from "./Footer.jsx";

function Profile(){
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <Box
            className="page"
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                background: "url(section.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <main className="px-2 md:px-8 py-6">
            	<Box sx={{
					margin: "130px 0px 0px 0px",
					display: "flex",
					alignItems: "center",
					flexDirection: "row",
					gap: "10px"
            	}}>
					<Box
						sx={{
							width: "45px",
							height: "45px",
							borderRadius: "50%",
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
							<ArrowBackIosNewIcon sx={{
								color: "#fff"
							}}/>
						</Box>
					</Box>

					<Typography sx={{
						fontSize: "32px",
						fontWeight: "bold",
						color: "#fff"
					}}>
						My Profile
					</Typography>
				</Box>

                <Box
                    sx={{
                        mt: "30px",
                        p: "3px",
                        borderRadius: 2,
                        background: "linear-gradient(to right, #cf3dff, #1c78d4)",
                        mb: 6,
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "black",
                            p: 4,
                            borderRadius: 2,
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <img
                            src="/person.jpg"
                            alt="profile"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                            <h2 className="text-xl font-semibold text-white">Sarah Johnson</h2>
                            <p className="text-gray-400">sarah.johnson@example.com</p>
                            <Box
                                sx={{
                                    mt: 2,
                                    display: "flex",
                                    justifyContent: { xs: "center", sm: "flex-start" },
                                    gap: 2,
                                }}
                            >
                                <Button
                                    sx={{
                                        borderRadius: "10px",
                                        padding: "0px 15px",
                                        background: "#2563EB",
                                        color: "#fff"
                                    }}
                                >
                                    <EditIcon fontSize="small" sx={{
                                        margin: "0px 3px 0px 0px"
                                    }} /> Edit Profile
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderRadius: "10px",
                                        border: "2px solid #EF4444",
                                        color: "#EF4444"
                                    }}
                                >
                                    <LogoutIcon fontSize="small" sx={{
                                        margin: "0px 3px 0px 0px"
                                    }} /> Logout
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 4,
                        mb: 6,
                    }}
                >
                    {[
                        { title: "Home", address: "123 Main Street, Apt 4B\nNew York, NY 10001" },
                        { title: "Office", address: "456 Business Ave\nNew York, NY 10002" },
                    ].map((location, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                p: "3px",
                                borderRadius: 2,
                                background: "linear-gradient(to right, #cf3dff, #1c78d4)",
                                position: "relative",
                            }}
                        >
                            <Box sx={{ backgroundColor: "black", p: 4, borderRadius: 2 }}>
                                <h3 className="font-semibold text-white mb-1">{location.title}</h3>
                                <p className="text-gray-400 text-sm whitespace-pre-line">
                                    {location.address}
                                </p>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        cursor: "pointer",
                                        color: "gray",
                                    }}
                                >
                                    <MoreVertIcon />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ mb: 6 }}>
                    <h3 className="text-lg font-semibold text-white mb-2">Wishlist</h3>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "1fr 1fr",
                                lg: "1fr 1fr 1fr",
                            },
                            gap: 4,
                        }}
                    >
                        {["/shoe2.png", "/shoe3.png", "/shoe4.png"].map((src, i) => (
                            <Box
                                key={i}
                                sx={{
                                    p: "3px",
                                    borderRadius: 2,
                                    background: "linear-gradient(to right, #cf3dff, #1c78d4)",
                                    "&:hover": {
                                        cursor: "pointer",
                                        transform: "scale(1.03)"
                                    },
                                    transition: "0.2s transform"
                                }}
                            >
                                <Box
                                    sx={{
                                        background: "#000",
                                        borderRadius: 2,
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt="shoe"
                                        width={350}
                                        height={250}
                                        className="h-[250px] w-full object-contain mb-2"
                                    />
                                    <Box
                                        sx={{
                                            background:
                                                "linear-gradient(to bottom, rgba(75, 85, 99, 0.5), #000)",
                                            p: 4,
                                        }}
                                    >
                                        <h4 className="font-medium text-white">Speed Runner</h4>
                                        <p className="text-sm text-gray-300">$139.99</p>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ mb: 6 }}>
                    <h3 className="text-lg font-semibold text-white mb-2">Order History</h3>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        {[
                            {
                                id: "12345",
                                total: "$649.97",
                                items: "3 Items",
                                date: "Delivered on March 15, 2025",
                            },
                            {
                                id: "12344",
                                total: "$199.99",
                                items: "1 Item",
                                date: "Delivered on March 10, 2025",
                            },
                        ].map((order, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    p: "3px",
                                    borderRadius: 2,
                                    background: "linear-gradient(to right, #cf3dff, #1c78d4)",
                                }}
                            >
                                <Box sx={{ backgroundColor: "#1a1a1a", p: 4, borderRadius: 2 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <p className="text-white">Order #{order.id}</p>
                                        <p className="px-2 py-1 rounded text-white">{order.total}</p>
                                    </Box>
                                    <p className="text-sm text-gray-400">{order.items}</p>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <p className="text-sm text-gray-400">{order.date}</p>
                                        <span className="bg-green-600 px-2 py-1 rounded text-sm text-white">
                                            Delivered
                                        </span>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                gap: 1.5,
                                pr: 1,
                                mt: 1,
                                cursor: "pointer",
                            }}
                        >
                            <p className="font-bold text-white">View More</p>
                            <ArrowForwardIosIcon sx={{ color: "#fff", fontSize: 16 }} />
                        </Box>
                    </Box>
                </Box>
            </main>
            <Footer />
        </Box>
    );
}

export default Profile;