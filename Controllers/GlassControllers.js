const Glass = require("../database/glass");

const getAllGlasses = async function (_, res) {
    const glasses = await Glass.findAll();
    res.send(glasses);
};

const createGlass = async function (req, res) {
    const { name } = req.body;
    const glass = await Glass.create({
      name
    });
    res.send(glass);
};

const getOneGlass = async function (req, res) {
    const glass = await Glass.findByPk(req.params.id);
      if(glass){
      res.send(glass)
      } else {
      res.send({message: "No such glass Found"});
     }
};

const putOneGlass = async function (req, res) {
    const { name } = req.body;
    if ((name)) {
      await Glass.update(req.body, {where: {id : req.params.id}});
      const glass = await Glass.findByPk(req.params.id);
      res.send(glass);
    } else {
        res.send({ message: "Write Error" });
    }
};

const patchOnGlass = async function (req, res) {
    await Glass.update(req.body,  {where: { id: req.params.id }});
    const glass = await Glass.findByPk(req.params.id);
    res.send(glass);
};

const deleteOneGlass = async function (req, res) {
    await Glass.destroy( {where: {id: req.params.id}});
    res.send({ message: "Operation successful" });
};

module.exports = {
    getAllGlasses,
    createGlass,
    getOneGlass,
    putOneGlass,
    patchOnGlass,
    deleteOneGlass
}
