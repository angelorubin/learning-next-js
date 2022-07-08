import React, { useRef } from "react";
import { Box, Typography, Input } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/assets/img/profile-default.jpg";
// import { http } from "./api/config";
import http from "axios";

export async function getStaticProps(context) {
	/*
	cloudinary.v2.search
	.expression('resource_type:image AND tags=kitten AND uploaded_at>1d AND bytes>1m')
	.sort_by('public_id', 'desc')
	.max_results(30)
	.execute().then(result => console.log(result));
	*/
	return {
		props: {}, // will be passed to the page component as props
	};
}

export default function Profile() {

	const handleChange = async (e) => {
		const formData = new FormData();

		let files = e.target.files[0];

		console.log(files);

		formData.append("profilePic", files);

		try {
			const resp = await http.post("api/profile", formData);
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
