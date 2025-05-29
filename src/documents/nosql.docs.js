/**
 * @openapi
 * tags:
 *   - name: NoSQL Users
 *     description: MongoDB Users API
 */

/**
 * @openapi
 * /nosql/users:
 *   get:
 *     tags:
 *       - NoSQL Users
 *     summary: Get all MongoDB users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserNoSQL'
 *
 *   post:
 *     tags:
 *       - NoSQL Users
 *     summary: Create a new MongoDB user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserNoSQL'
 *     responses:
 *       201:
 *         description: Created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserNoSQL'
 *
 * /nosql/users/{id}:
 *   get:
 *     tags:
 *       - NoSQL Users
 *     summary: Get a MongoDB user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: MongoDB user ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserNoSQL'
 *       404:
 *         description: User not found
 *
 *   put:
 *     tags:
 *       - NoSQL Users
 *     summary: Update a MongoDB user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: MongoDB user ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserNoSQL'
 *     responses:
 *       200:
 *         description: Updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserNoSQL'
 *       404:
 *         description: User not found
 *
 *   delete:
 *     tags:
 *       - NoSQL Users
 *     summary: Delete a MongoDB user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: MongoDB user ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     UserNoSQL:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB ObjectId
 *           example: 60d0fe4f5311236168a109ca
 *         name:
 *           type: string
 *           example: "John Doe"
 *         email:
 *           type: string
 *           example: "john@example.com"
 */
