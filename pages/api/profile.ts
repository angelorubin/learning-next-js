// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
import formidable from "formidable";
import { initMiddleware, cors } from "pages/api/libs/initMiddleware";

type Data = {
	data: object;
};

// Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// Run the middleware
	await cors(req, res);

	const { err, files, fields } = await new Promise((resolve, reject) => {
		const form = formidable();

		form.parse(req, (err, fields, files) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({ err, fields, files });
		});
	});

	if (err) {
		return res.json({ err });
	}

	const { path, name } = files.profilePic;
	console.log({ name, path });
	res.json({ name, path });

	/*
	try {
		cloudinary.v2.uploader.upload(
			path,
			{ public_id: "default-profile-picture", folder: "easy-erp" },
			(error, result) => {
				if (error) {
					res.json({ error });
				}
				res.json({
					status: "OK",
					message: "imagem do perfil armazenada com sucesso.",
				});
			}
		);
	} catch (error) {
		res.json({ error });
	}
  */
}
