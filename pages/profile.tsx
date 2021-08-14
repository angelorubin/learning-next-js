import { useState, useRef } from "react";
import { Box, Typography, Input } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import profilePic from "../public/assets/img/profile-default.jpg";
import http from "axios";

const Profile = () => {
	const [file, setFile] = useState("");

	const fileRef = useRef();

	const handleChange = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		const file = document.querySelector("#file").files[0];

		formData.append("image", file);

		try {
			const resp = await http.post("/api/profile", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Box sx={{ display: "flex" }}>
			<Box
				sx={{
					display: "flex",
					border: "1px solid #CCC",
					borderRadius: 5,
					margin: 1,
					padding: 1,
				}}
			>
				<form id="form-profile">
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Image
							src={profilePic}
							alt="profile picture"
							height="120"
							width="120"
						/>
						<Input type="file" id="file" name="file" onChange={handleChange} />
					</Box>
				</form>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
						<Typography variant="body2">Nome: Angelo Rubin</Typography>
						<Typography variant="body2">
							Profissão: Frontend Developer
						</Typography>
						<Typography variant="body2">Idade: 44</Typography>
						<Typography variant="body2">
							Biografia: Lorem ipsum dolor simet.
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Profile;
