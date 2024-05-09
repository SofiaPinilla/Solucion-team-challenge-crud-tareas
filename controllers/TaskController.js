const Task = require("../models/Task");

const TaskController = {
  async create(req, res) {
    try {
      const task = await Task.create({ ...req.body, completed: false });
      res.status(201).send({ message: "task successfully created", task });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "There was a problem trying to create a Task",
        error,
      });
    }
  },
  async getAll(req, res) {
    try {
      const tasks = await Task.find();
      res.send(tasks);
    } catch (error) {
      res.status(500).send({
        message: "There was a problem trying to get the tasks",
        error,
      });
    }
  },
  async getById(req, res) {
    try {
      const task = await Task.findById(req.params._id);
      res.send(task);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message:
          "There was a problem with the task with _id number: " +
          req.params._id,
      });
    }
  },
  async getByTitle(req, res) {
    try {
      const tasks = await Task.find({
        $text: {
          $search: req.params.title,
        },
      });
      res.send(tasks);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to get the task", error });
    }
  },
  async update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      res.send({ message: "task successfully updated", task });
    } catch (error) {
      res.status(500).send({
        message: "There was a problem trying to update the task",
        error,
      });
    }
  },
  async delete(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params._id);
      res.send({ message: "task deleted", task });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to delete the task" });
    }
  },
  async getAllWithPagination(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const tasks = await Task.find()
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(tasks);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to get the tasks", error });
    }
  }
};

module.exports = TaskController;
