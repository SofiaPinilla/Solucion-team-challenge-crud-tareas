module.exports = {
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header"
      }
  },
    schemas: {
      task: {
        type: "object",
        properties: {
          _id: {
            type: "objectId",
            description: "task identification number",
            example: "6201064b0028de7866e2b2c4",
          },
          title: {
            type: "string",
            description: "task's title",
            example: "make an excellent readme",
          },
          completed: {
            type: "boolean",
            description: "The status of the task",
            example: false,
          },
        },
      },
      TaskInput: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Task's title",
            example: "make an excellent readme",
          },
        },
      },
      _id: {
        type: "objectId",
        description: "An id of a task",
        example: "6201064b0028de7866e2b2c4",
      },
      user: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: "name",
                example: "Euralio"
            },
            email: {
                type: 'string',
                description: "email",
                example: "euralio@gmail.com"
            },
            password: {
                type: 'string',
                description: "password",
                example: "mimamamemima123"
            },
            birthday: {
                type: "date",
                description: "User birthday",
                example: "1985-08-13"
            }
        }
    }
    },
  },
};
