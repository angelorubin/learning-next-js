import axios from "axios";

export const http = axios.create({
	baseURL: "localhost:3000/",
	headers: {
		"Content-Type": "multipart/form-data",
	},
});
