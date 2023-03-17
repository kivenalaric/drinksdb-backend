/**
 * @swagger
 * components:
 *   schemas:
 *     Drink:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the drink
 *         name:
 *           type: string
 *           description: The name of the drink
 *         imageUrl:
 *           type: string
 *           description: The image Url of the drink
 *         description:
 *           type: string
 *           description: The description of the drink
 *         recipe:
 *           type: string
 *           description: The recipe for the drink
 *         UserId:
 *           type: string
 *           description: auto generated from user id as it is a foreign key
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the drink was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the drink was updated
 *       example:
 *         id: 1
 *         name: Orijin
 *         imageUrl: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdKqVSRjbla6FZxeT2oGjPLVXsratYpZ7_A&usqp=CAU
 *         description: Inspired by the tradition of herbal drinks, it is an alcoholic blend, with the flavours of african hers and fruits, combined to give a refreshing bitter-sweet taste
 *         recipe: water,alcohol,sugar,plant extract (kola nut, prune, oakwood, bitter orange peel, wormwood)
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */


/**
 * @swagger
 * tags:
 *   name: Drinks
 *   description: The drinks managing API
 * /drinks:
 *   get:
 *     summary: Lists all the drinks
 *     tags: [Drinks]
 *     responses:
 *       200:
 *         description: The list of the drinks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Drink'
 *   post:
 *     summary: Create a new drink
 *     tags: [Drinks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Drink'
 *     responses:
 *       200:
 *         description: The created drink.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Drink'
 *       500:
 *         description: Some server error
 * /drinks/{id}:
 *   get:
 *     summary: Get the drink by id
 *     tags: [Drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The drink id
 *     responses:
 *       200:
 *         description: The drink response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/drink'
 *       404:
 *         description: The drink was not found
 *   put:
 *    summary: Update the drink by the id
 *    tags: [Drinks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The drink id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Drink'
 *    responses:
 *      200:
 *        description: The drink was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Drink'
 *      404:
 *        description: The drink was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The drink id
 *
 *     responses:
 *       200:
 *         description: The drink was deleted
 *       404:
 *         description: The drink was not found
 */

const express = require("express");
// const Drink = require("../database/drinks");
const router = express.Router();
const DrinkControllers = require('../Controllers/DrinkControllers');

router.get("/", DrinkControllers.getAllDrinks);

router.post("/", DrinkControllers.createDrink);

router.get("/:id", DrinkControllers.getOneDrink);

router.put("/:id", DrinkControllers.putOneDrink);

router.patch("/:id", DrinkControllers.patchOnDrink);

router.delete("/:id", DrinkControllers.deleteDrink);

module.exports = router;