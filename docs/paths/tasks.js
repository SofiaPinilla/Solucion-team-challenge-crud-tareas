module.exports = {
    "/tasks": {
      get: {
        tags: {
          Tasks: "Get Tasks",
        },
        description: "Get tasks",
        operationId: "getTasks",
        parameters: [],
        responses: {
          200: {
            description: "Tasks were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/task",
                },
              },
            },
          },
        },
      },
      post: {
        security: [{
          ApiKeyAuth: [ ]
        }],
        tags: {
          Tasks: "Create a task",
        },
        description: "Create Task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskInput",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
    "/tasks/id/{_id}": {
      put: {
        tags: {
          Tasks: "Update a task",
        },
        description: "Update Task",
        operationId: "updateTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of Task to be updated",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TaskInput" },
            },
          },
        },
        responses: {
          200: { description: "Task updated successfully" },
          404: { description: "Task not found" },
          500: { description: "Server error" },
        },
      },
      delete: {
        tags: {
          Tasks: "Delete a task",
        },
        description: "Deleting a Task",
        operationId: "deleteTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Deleting a done Task",
          },
        ],
        responses: {
          200: { description: "Task deleted successfully" },
          404: { description: "Task not found" },
          500: { description: "Server error" },
        },
      },
    },
  }
