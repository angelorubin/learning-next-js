import React from "react";
import {
	styled,
	Typography,
	Grid,
	Paper,
	Box,
	Button,
	TextField,
	InputAdornment,
	OutlinedInput,
	Link,
} from "@material-ui/core";
import { EmailOutlined, LockOutlined } from "@material-ui/icons";
import Image from "next/image";
import NextLink from "next/link";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function Login() {
	return (
		<Box
			sx={{
				display: "flex",
				height: "100vh",
				"@media(max-width: 600px)": {
					display: "flex",
					flexDirection: "column",
				},
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					flex: 1,
					backgroundImage: `url("/assets/img/bg.png")`,
					backgroundSize: "cover",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
						height: "100%",
						gap: "10px",
						"@media(max-width: 600px)": {
							justifyContent: "center",
							alignItems: "center",
						},
					}}
				>
					<Typography
						sx={{
							fontFamily: "Poppins, sans-serif",
							color: (theme) => theme.palette.common.white,
							fontWeight: "bold",
							fontSize: "40px",
						}}
					>
						Easy ERP
					</Typography>
					<Typography
						sx={{
							fontWeight: "500",
							fontSize: "18px",
							color: (theme) => theme.palette.common.white,
							fontFamily: "Poppins, sans-serif",
						}}
					>
						The most popular peer to peer lending at SEA
					</Typography>
					<Button
						sx={{
							color: (theme) => theme.palette.common.white,
							background: "#0575E6",
							width: "135px",
							height: "37px",
							borderRadius: "30px",
							fontSize: "14px",
							textTransform: "none",
							marginTop: "20px",
						}}
					>
						Read More
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
					<Typography
						sx={{
							fontFamily: "Poppins, sans-serif",
							fontWeight: 700,
							fontSize: 26,
						}}
					>
						Hello Again!
					</Typography>
					<Typography sx={{ marginBottom: "40px" }}>Welcome Back</Typography>
					<form>
						<Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
							<OutlinedInput
								id="email"
								name="email"
								placeholder="Email Address"
								startAdornment={
									<InputAdornment position="start">
										<EmailOutlined sx={{ opacity: 0.3 }} />
									</InputAdornment>
								}
								sx={{
									width: 307,
									height: 60,
									backgroundColor: "#FFFFFF",
									boxSizing: "border-box",
									borderRadius: 30,
								}}
							/>
							<OutlinedInput
								id="password"
								name="password"
								placeholder="Password"
								type="password"
								startAdornment={
									<InputAdornment position="start">
										<LockOutlined sx={{ opacity: 0.3 }} />
									</InputAdornment>
								}
								sx={{
									width: 307,
									height: 60,
									backgroundColor: "#FFFFFF",
									boxSizing: "border-box",
									borderRadius: "30px",
								}}
							/>
							<Button
								sx={{
									width: "307px",
									height: "57px",
									background: "#0575E6",
									borderRadius: "30px",
									color: (theme) => theme.palette.common.white,
									"&:hover": {
										backgroundColor: "blue",
									},
								}}
							>
								Login
							</Button>
							<Box sx={{ display: "flex", justifyContent: "center" }}>
								<Link component={NextLink} href="/">
									Forgot Password
								</Link>
							</Box>
						</Box>
					</form>
				</Box>
			</Box>
		</Box>
	);
};
