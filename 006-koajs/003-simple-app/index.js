const Koa = require('koa');

const bootstrap = require('./middleware');

/**
 * Return a list of books
 * GET /books/  -> 200 OK
 *
 * Return a book by ID
 * GET /books/:id -> 200 OK / 404 Not Found
 *
 * Create a new book
 * POST /books/ -> 400 Bad Request / 201 Created / 202 Accepted
 *
 * Update a book
 * PUT /books/:id -> 200 OK
 * PATCH /books/:id -> 200 OK
 *
 * Delete a book
 * DELETE /books/:id -> 200 OK / 204 No Content
 *
 * 401 - Unauthorized
 * 403 - Forbidden
 * 500 - Internal
 * Server Error
 */

const app = new Koa();

bootstrap(app);

app.listen(3000);
