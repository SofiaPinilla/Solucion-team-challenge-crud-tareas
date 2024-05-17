module.exports = {
  "/users/register": {
    post: {
      tags: {
        Users: "Create User",
      },
      description: "Create User",
      operationId: "createUser",
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/user",
            },
          },
        },
      },
      responses: {
        201: {
          description: "User Created",
        },
      },
    },
  },
};
