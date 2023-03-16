const Category = require("../database/categories");

const getAllCategories = async function (_, res) {
    const categories = await Category.findAll();
    res.send(categories);
};

const createCategory = async function (req, res) {
    const { name, description } = req.body;
    const category = await Category.create({
      name, description
    });
    res.send(category);
};

const getOneCategory = async function (req, res) {
    const category = await Category.findByPk(req.params.id);
    if(category){
      res.send(category)
    } else {
    res.send({message: "No such category Found"})
  }
};

const putOneCategory = async function (req, res) {
    const { name, description  } = req.body;
    if ((name && description)) {
      await Category.update(req.body, {where: {id : req.params.id}});
      const category = await Category.findByPk(req.params.id);
      res.send(category);
    } else {
      res.send({ message: "Write Error" });
    };
};

const patchOnCategory = async function (req, res) {
    await Category.update(req.body,  {where: { id: req.params.id }});
    const category = await Category.findByPk(req.params.id);
    res.send(category);
};

const deleteOneCategory = async function (req, res) {
    await Category.destroy( {where: {id: req.params.id}});
    res.send({ message: "Operation successful" });
};

module.exports = {
    getAllCategories,
    createCategory,
    getOneCategory,
    putOneCategory,
    patchOnCategory,
    deleteOneCategory,
}