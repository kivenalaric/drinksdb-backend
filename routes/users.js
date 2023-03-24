/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - emailAddress
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         firstName:
 *           type: string
 *           description: The firstName of the user
 *         lastName:
 *           type: string
 *           description: The lasttName of the user
 *         emailAddress:
 *           type: string
 *           description: The password of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         adminUser:
 *           type: boolean
 *           description: Whether you have finished reading the user
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the user was updated
 *       example:
 *         id: 1
 *         firstName: Rash
 *         lastName: Lahfen
 *         emailAddress: rash237@gmail.com
 *         adminUser: false
 *         password: rashking
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

// /**
//  * @swagger
//  * tags:
//  *   name: Users
//  *   description: The users managing API
//  * /users:
//  *   post:
//  *     summary: Create a new user
//  *     tags: [Users]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/User'
//  *     responses:
//  *       200:
//  *         description: The created user.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/User'
//  *       500:
//  *         description: Some server error
//  *
//  */

// /**
//  * @swagger
//  * tags:
//  *   name: Books
//  *   description: The books managing API
//  * /books:
//  *   post:
//  *     summary: Create a new book
//  *     tags: [Books]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Book'
//  *     responses:
//  *       200:
//  *         description: The created book.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Book'
//  *       500:
//  *         description: Some server error
//  *
//  */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       404:
 *         description: The user was not found
 *   put:
 *    summary: Update the user by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */


const express = require("express");
// const bcrypt = require("bcrypt");
// const uuid = require('uuid');
const UserController = require('../Controllers/UserControllers')


const Drink = require("../database/drinks");
const User = require("../database/users");
const { authMiddleware, authorizeByIsAdmin, authorizeByApiKey } = require("../services/auth");
// const { authMiddleware } = require("../services/auth")

const router = express.Router();

router.get("/", authMiddleware, authorizeByApiKey, UserController.findAll);

router.post("/", UserController.createUser)

router.get("/:id", authMiddleware, authorizeByApiKey, UserController.getOneUser);

router.put("/:id",authMiddleware, authorizeByIsAdmin, UserController.putOneUser);

router.patch("/:id",authMiddleware, authorizeByIsAdmin, UserController.patchOnUser);

router.delete("/:id", authMiddleware, authorizeByIsAdmin, UserController.deleteUser);

module.exports = router;
