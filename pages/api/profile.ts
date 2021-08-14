// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
import formidable from "formidable";

type Data = {};

// Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
	next: NextApiResponse
) {
	if (req.method === "POST") {
		try {
			const formData = formidable();
			formData.parse(req, (err, fields, files) => {
				if (err) {
					res.json({ err });
					return;
				}
				res.json({ fields, files });
			});
		} catch (err) {
			return res.json(err);
		}
	}
	res.json({ test: "test" });
}

/*
		cloudinary.v2.uploader.upload(files, function (error, result) {
			if (error) {
				res.json({ error });
			}
			res.json({ result });
		});
		

	// const body = JSON.parse(req.body);
	// res.json({ message: "profile route ok" });
	// res.json({ data: body });
	/**
	cloudinary.config({
		cloud_name: "angelorubin",
		api_key: "149925445922486",
		api_secret: "KMbZ_joPRKLsTPgekw_SjoW04Qc",
	});

	cloudinary.v2.uploader.upload(
		"https://static.remove.bg/remove-bg-web/bf554ca6716508caedc52f1ac289b1eec29b6734/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png",
		{ public_id: "sample_woman" },
		function (error, result) {
			console.log(result);
		}
	);
	*/
