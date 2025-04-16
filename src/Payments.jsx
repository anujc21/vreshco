import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "./Footer.jsx";

function Payments() {
    const navigate = useNavigate();

    const paymentMethods = [
        { label: "Credit/Debit Card", icon: <CreditCardIcon fontSize="small" /> },
        { label: "UPI", icon: <PaymentsIcon fontSize="small" /> },
        { label: "Cash on Delivery", icon: <LocalShippingIcon fontSize="small" /> },
        { label: "Wallet", icon: <AccountBalanceWalletIcon fontSize="small" /> },
    ];

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
                    <ArrowBackIosNewIcon sx={{ color: "#fff" }} />
                </Box>
            </Box>

            <Box
                sx={{
                    px: "20px",
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "30px auto 50px auto",
                    color: "white",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    flexGrow: 1,
                }}
            >
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                    <Box
                        sx={{
                            borderRadius: 3,
                            p: "3px",
                            background: "linear-gradient(to right, #cf3dff, #1c78d4)",
                        }}
                    >
                        <Box sx={{ backgroundColor: "#000", borderRadius: 3, p: 2.2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 1,
                                }}
                            >
                                <h2 className="text-lg font-semibold" style={{ fontSize: "22px" }}>
                                    Shipping Address
                                </h2>
                                <button
                                    className="text-sm text-blue-400 hover:underline flex items-center gap-1"
                                    style={{ cursor: "pointer", fontSize: "17px" }}
                                >
                                    <EditIcon fontSize="small" />
                                    Edit
                                </button>
                            </Box>
                            <Box
                                sx={{
                                    background: "linear-gradient(to right, #cf3dff, #1c78d4)",
                                    borderRadius: 2,
                                    p: "3px",
                                }}
                            >
                                <Box sx={{ backgroundColor: "#221f1f", borderRadius: 2, p: "15px" }}>
                                    <p className="text-sm mb-1" style={{ fontSize: "17px", fontWeight: "bold" }}>
                                        John Doe <br />
                                    </p>
                                    <p className="text-sm" style={{ color: "#ccc", fontSize: "15px" }}>
                                        123 Main Street, Apt 4B <br />
                                        New York, NY 10001 <br />
                                        Phone: (555) 123-4567
                                    </p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            borderRadius: 3,
                            p: "3px",
                            background: "linear-gradient(to bottom, #cf3dff, #1c78d4)",
                        }}
                    >
                        <Box sx={{ backgroundColor: "#000", borderRadius: 3, p: 2.2 }}>
                            <h2 className="text-lg font-semibold mb-4" style={{ fontSize: "22px" }}>
                                Payment Method
                            </h2>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                {paymentMethods.map((method) => (
                                    <Box
                                        key={method.label}
                                        sx={{
                                            borderRadius: 2,
                                            p: "2px",
                                            background: "linear-gradient(to right, #cf3dff, #1c78d4)",
                                            transition: "0.2s transform",
                                            cursor: "pointer",
                                            "&:hover": {
                                                transform: "scale(1.02)",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: "#1A1A1A",
                                                borderRadius: 2,
                                                px: 2.5,
                                                py: 1.5,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                            }}
                                        >
                                            {method.icon}
                                            <span className="text-sm" style={{ fontSize: "17px" }}>
                                                {method.label}
                                            </span>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        maxWidth: { md: 300 },
                        borderRadius: 2,
                        p: "3px",
                        background: "linear-gradient(to bottom, #cf3dff, #1c78d4)",
                        height: "fit-content",
                        alignSelf: "flex-start",
                    }}
                >
                    <Box sx={{ backgroundColor: "#1A1A1A", borderRadius: 2, p: 2 }}>
                        <h2 className="text-lg font-semibold mb-4" style={{ fontSize: "22px" }}>
                            Order Summary
                        </h2>
                        <Box
                            sx={{
                                fontSize: "0.875rem",
                                mb: 3,
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "17px" }}>Subtotal</span>
                                <span style={{ fontSize: "17px" }}>$99.00</span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "17px" }}>Shipping</span>
                                <span style={{ fontSize: "17px" }}>$5.00</span>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "17px" }}>Tax</span>
                                <span style={{ fontSize: "17px" }}>$9.90</span>
                            </Box>
                            <hr style={{ borderColor: "#555" }} />
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontWeight: "600",
                                }}
                            >
                                <span style={{ fontSize: "17px" }}>Total</span>
                                <span style={{ fontSize: "17px" }}>$113.90</span>
                            </Box>
                        </Box>
                        <Button
                            fullWidth
                            sx={{
                                background: "#2563EB",
                                color: "#fff",
                                fontSize: "17px",
                            }}
                            onClick={() => navigate("/confirmation")}
                        >
                            Place Order
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
}

export default Payments;