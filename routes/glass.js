/**
 * @swagger
 * components:
 *   schemas:
 *     Glass:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the glass
 *         name:
 *           type: string
 *           description: The name of the glass
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the glass was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the glass was updated
 *       example:
 *         id: 1
 *         name: Long
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */


/**
 * @swagger
 * tags:
 *   name: Glasses
 *   description: The drinks managing API
 * /glasses:
 *   get:
 *     summary: Lists all the glasses
 *     tags: [Glasses]
 *     responses:
 *       200:
 *         description: The list of the glasses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Glass'
 *   post:
 *     summary: Create a new glass
 *     tags: [Glasses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Glass'
 *     responses:
 *       200:
 *         description: The created glass.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Glass'
 *       500:
 *         description: Some server error
 * /glasses/{id}:
 *   get:
 *     summary: Get the glass by id
 *     tags: [Glasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The glass id
 *     responses:
 *       200:
 *         description: The glass response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/glass'
 *       404:
 *         description: The glass was not found
 *   put:
 *    summary: Update the glass by the id
 *    tags: [Glasses]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The glass id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Glass'
 *    responses:
 *      200:
 *        description: The glass was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Glass'
 *      404:
 *        description: The glass was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the glass by id
 *     tags: [Glasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The glass id
 *
 *     responses:
 *       200:
 *         description: The glass was deleted
 *       404:
 *         description: The glass was not found
 */


const express = require("express");
// const Glass = require("../database/glass");
const router = express.Router();
const GlassControllers = require('../Controllers/GlassControllers')

router.get("/", GlassControllers.getAllGlasses);

router.post("/", GlassControllers.createGlass);

router.get("/:id", GlassControllers.getOneGlass);

router.put("/:id", GlassControllers.putOneGlass);

router.patch("/:id", GlassControllers.patchOnGlass);

router.delete("/:id", GlassControllers.deleteOneGlass);

module.exports = router;