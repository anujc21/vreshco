import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    Box,
    Typography,
    Input,
    InputAdornment,
    Button,
    Divider,
    Checkbox,
    FormControlLabel
} from "@mui/material";
import {
    MailOutline,
    LockOutline,
    PersonOutline,
    Phone,
    Visibility,
    Google,
    Facebook
} from "@mui/icons-material";

function SignUp(){
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	});

    return (
        <Box
            className="page"
            sx={{
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
            }}
        >
            <Box
                sx={{
                    margin: "120px 0px 60px 0px",
                    width: "100%",
                    maxWidth: "500px",
                    borderRadius: "10px",
                    padding: "3px",
                    background: "linear-gradient(to bottom, #cf3dff, #1c78d4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{
                        padding: "30px 50px",
                        width: "100%",
                        background: "#1A1A1A",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Typography align="center" sx={{ fontSize: "32px", fontWeight: "bold", color: "#fff" }}>
                        Welcome to Vreshco!
                    </Typography>
                    <Typography align="center" sx={{ margin: "10px 0", fontSize: "18px", color: "#ccc" }}>
                        Ready to step into something amazing?
                    </Typography>
                    <Typography align="center" sx={{ margin: "10px 0", fontSize: "16px", color: "#ccc" }}>
                        Create your account
                    </Typography>
                    <Box sx={inputWrapperStyle}>
                        <Input
                            placeholder="Full Name"
                            disableUnderline
                            fullWidth
                            sx={inputStyle}
                            startAdornment={<InputAdornment position="start"><PersonOutline sx={{ color: "#ccc" }} /></InputAdornment>}
                        />
                    </Box>
                    <Box sx={inputWrapperStyle}>
                        <Input
                            placeholder="Email Address"
                            disableUnderline
                            fullWidth
                            sx={inputStyle}
                            startAdornment={<InputAdornment position="start"><MailOutline sx={{ color: "#ccc" }} /></InputAdornment>}
                        />
                    </Box>
                    <Box sx={inputWrapperStyle}>
                        <Input
                            placeholder="Phone Number"
                            disableUnderline
                            fullWidth
                            sx={inputStyle}
                            startAdornment={<InputAdornment position="start"><Phone sx={{ color: "#ccc" }} /></InputAdornment>}
                        />
                    </Box>
                    <Box sx={inputWrapperStyle}>
                        <Input
                            placeholder="Password"
                            disableUnderline
                            fullWidth
                            type="password"
                            sx={inputStyle}
                            startAdornment={<InputAdornment position="start"><LockOutline sx={{ color: "#ccc" }} /></InputAdornment>}
                            endAdornment={<InputAdornment position="end"><Visibility sx={{ color: "#ccc" }} /></InputAdornment>}
                        />
                    </Box>
                    <Box sx={inputWrapperStyle}>
                        <Input
                            placeholder="Confirm Password"
                            disableUnderline
                            fullWidth
                            type="password"
                            sx={inputStyle}
                            startAdornment={<InputAdornment position="start"><LockOutline sx={{ color: "#ccc" }} /></InputAdornment>}
                            endAdornment={<InputAdornment position="end"><Visibility sx={{ color: "#ccc" }} /></InputAdornment>}
                        />
                    </Box>
                    <Typography
                        align="right"
                        sx={{
                            margin: "25px 0 0 0",
                            fontSize: "16px",
                            color: "#2563EB",
                            "&:hover": { cursor: "pointer" }
                        }}
                    >
                        Privacy Policy
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: "#ccc",
                                    '&.Mui-checked': {
                                        color: "#2563EB"
                                    }
                                }}
                            />
                        }
                        label={
                            <Typography sx={{ fontSize: "16px", color: "#ccc" }}>
                                I agree to the <span style={{ color: "#2563EB", cursor: "pointer" }}>Terms and Conditions</span>
                            </Typography>
                        }
                        sx={{ margin: "15px 0px 15px 0px" }}
                    />
                    <Box sx={buttonWrapperStyle}>
                        <Button
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "10px",
                                color: "#fff",
                                background: "#711488"
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                    <Divider sx={{ alignSelf: "center", width: "100%", margin: "20px 0 10px 0", background: "#fff" }} />
                    <Typography
                        align="center"
                        sx={{ margin: "5px 0 10px 0", fontSize: "16px", color: "#ccc", "&:hover": { cursor: "pointer" } }}
                    >
                        Or continue with
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: "10px",
                            padding: "10px 0"
                        }}
                    >
                        <Box sx={buttonWrapperStyle}>
                            <Button
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    background: "#1A1A1A"
                                }}
                            >
                                <Google sx={{ fontSize: "1.3rem", marginRight: "5px", color: "#EF4444" }} />
                                Google
                            </Button>
                        </Box>
                        <Box sx={buttonWrapperStyle}>
                            <Button
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    background: "#1A1A1A"
                                }}
                            >
                                <Facebook sx={{ fontSize: "1.3rem", marginRight: "5px", color: "#2563EB" }} />
                                Facebook
                            </Button>
                        </Box>
                    </Box>
                    <Typography align="center" sx={{ margin: "20px 0 0 0", fontSize: "16px", color: "#ccc" }}>
                        Already have an account?{" "}
                        <span style={{ fontWeight: "bold", cursor: "pointer", color: "#2563EB" }} onClick={() => navigate("/sign-in")}>
                            Sign in
                        </span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

const inputWrapperStyle = {
    margin: "20px auto 0",
    width: "100%",
    borderRadius: "10px",
    padding: "2px",
    background: "linear-gradient(to right, #cf3dff, #1c78d4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const inputStyle = {
    borderRadius: "10px",
    background: "rgba(0, 0, 0, 0.7)",
    padding: "5px 10px",
    color: "#fff",
    "& input::placeholder": {
        color: "#fff"
    }
};

const buttonWrapperStyle = {
    alignSelf: "center",
    width: "100%",
    padding: "2px",
    borderRadius: "10px",
    background: "linear-gradient(to right, #cf3dff, #1c78d4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export default SignUp;