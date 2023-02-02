const postsModel = require("../models/posts.model.js");

export const createPost = async (req, res) => {
  const { name, age } = req.body;
  const data = new postsModel({ name, age });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
