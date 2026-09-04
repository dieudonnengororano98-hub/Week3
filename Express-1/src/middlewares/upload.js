import sharp from 'sharp';

const createThumbnail = async (req, res, next) => {
  try {
    const { path, filename } = req.file;

    await sharp(path)
      .resize(200, 200)
      .toFile(`uploads/${filename}_thumb`);

    next();
  } catch (error) {
    next(error);
  }
};

export { createThumbnail };