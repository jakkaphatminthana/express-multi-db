/**
 * @openapi
 * tags:
 *   - name: SQL Users
 *     description: PostgreSQL Users API
 */

/**
 * @openapi
 * /sql/users:
 *   get:
 *     tags:
 *       - SQL Users
 *     summary: Get all PostgreSQL users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserSQL'
 *
 *   post:
 *     tags:
 *       - SQL Users
 *     summary: Create a new PostgreSQL user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSQLInput'
 *     responses:
 *       201:
 *         description: Created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSQL'
 *
 * /sql/users/{id}:
 *   get:
 *     tags:
 *       - SQL Users
 *     summary: Get a PostgreSQL user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: PostgreSQL user ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSQL'
 *       404:
 *         description: User not found
 *
 *   put:
 *     tags:
 *       - SQL Users
 *     summary: Update a PostgreSQL user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: PostgreSQL user ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSQLInput'
 *     responses:
 *       200:
 *         description: Updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSQL'
 *       404:
 *         description: User not found
 *
 *   delete:
 *     tags:
 *       - SQL Users
 *     summary: Delete a PostgreSQL user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: PostgreSQL user ID
 *         schema:
 *           type: integer
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
 *     UserSQL:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Jane Doe"
 *         email:
 *           type: string
 *           example: "jane@example.com"
 *     UserSQLInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           example: "Jane Doe"
 *         email:
 *           type: string
 *           example: "jane@example.com"
 */
