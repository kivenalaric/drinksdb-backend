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
 *           description: The auto-generated id of the book
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
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the book was updated
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

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
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
 *
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
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
 *
 */

const express = require("express");
// const bcrypt = require("bcrypt");
// const uuid = require('uuid');
const UserController = require('../Controllers/UserControllers')


const Drink = require("../database/drinks");
const User = require("../database/users");
// const { authMiddleware } = require("../services/auth")

const router = express.Router();

router.get("/", UserController.findAll);

router.post("/", UserController.createUser)

router.get("/:id", UserController.getOneUser);

router.put("/:id", UserController.putOneUser);

router.patch("/:id", UserController.patchOnUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
