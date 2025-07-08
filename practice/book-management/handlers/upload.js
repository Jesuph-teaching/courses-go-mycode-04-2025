export function uploadFile(req, res) {
	res.json({
		success: true,
		message: 'file uploaded successfully',
		data: `${process.env.BACKEND_DOMAIN}/public/${req.file.filename}`,
	});
}
