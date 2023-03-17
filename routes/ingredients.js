/**
 * @swagger
 * components:
 *   schemas:
 *     Ingredient:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the ingredient
 *         name:
 *           type: string
 *           description: The name of the ingredient
 *         description:
 *           type: string
 *           description: The description of the ingredient
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the ingredient was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the ingredient was updated
 *       example:
 *         id: 1
 *         name: Herbal
 *         description: Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste
 *         recipe: water,alcohol,sugar,plant extract (kola nut, prune, oakwood, bitter orange peel, wormwood)
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */


/**
 * @swagger
 * tags:
 *   name: Ingredients
 *   description: The ingredients managing API
 * /ingredients:
 *   get:
 *     summary: Lists all the ingredients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: The list of the ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingredient'
 *     responses:
 *       200:
 *         description: The created ingredient.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       500:
 *         description: Some server error
* /ingredients/{id}:
 *   get:
 *     summary: Get the ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ingredient id
 *     responses:
 *       200:
 *         description: The ingredient response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ingredient'
 *       404:
 *         description: The ingredient was not found
 *   put:
 *    summary: Update the ingredient by the id
 *    tags: [Ingredients]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ingredient id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingredient'
 *    responses:
 *      200:
 *        description: The ingredient was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Ingredient'
 *      404:
 *        description: The ingredient was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ingredient id
 *
 *     responses:
 *       200:
 *         description: The ingredient was deleted
 *       404:
 *         description: The ingredient was not found
 */


const express = require("express");
// const Ingredient = require("../database/ingredients");
const router = express.Router();
const IngredientControllers = require('../Controllers/IngredientControllers');

router.get("/", IngredientControllers.getAllIngredients);

router.post("/", IngredientControllers.createIngredient);

router.get("/:id",IngredientControllers.getOneIngredient );

router.put("/:id", IngredientControllers.putOneIngredient);

router.patch("/:id", IngredientControllers.patchOnIngredient);

router.delete("/:id",IngredientControllers.deleteOneIngredient );

module.exports = router;