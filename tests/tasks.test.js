const request = require("supertest");
const app = require("../index.js");
const Task = require("../models/Task.js");

describe("testing/tasks", () => {
    //lo que pasaríamos por el body en el postman
    const task = {
        title: "task 1",
        body: "Body task 1",
    };
    //cuando terminan los test vacía toda la colección de tasks
    afterAll(() => {
        return Task.deleteMany()
    });

    test("Create a task", async() => {
        // contamos los documentos que tenemos en nuestra colección de tasks
        let tasksCount = await Task.countDocuments({});
        expect(tasksCount).toBe(0); //no deberían haber
        //creamos un task
        const res = await request(app).post("/tasks/create").send(task).expect(201);
        //volvemos a contar nuestra colección de tasks
        tasksCount = await Task.countDocuments({});
        expect(tasksCount).toBe(1); // ahora debería haber un task
        expect(res.body.task._id).toBeDefined(); //ahora nuestro task debería tener un _id
        expect(res.body.task.createdAt).toBeDefined(); //ahora nuestro task debería tener un createdAt
        expect(res.body.task.updatedAt).toBeDefined(); //ahora nuestro task debería tener un updatedAt
    });
    test("Get tasks", async() => {
        //hacemos la petición de get tasks
        const res = await request(app)
            .get("/tasks")
            .expect(200)
            //los tasks deberían venir en un array y lo comprobamos
        expect(res.body).toBeInstanceOf(Array);
    });
});