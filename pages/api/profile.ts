// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import cloudinary from "cloudinary";
import formidable from "formidable";
import util from "util";

type Data = {
  data: object;
};

// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
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
  const data = await new Promise((resolve, reject) => {
    const form = formidable();

    form.parse(req, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  cloudinary.v2.uploader.upload(data.files.files.path, {}, (error, result) => {
    res.json({
      status: "ok",
      data: data.files.files,
    });
  });
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
