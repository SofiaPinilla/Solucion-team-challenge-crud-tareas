const express = require("express");
const TaskController = require("../controllers/TaskController");
const { authentication } = require("../middleware/authentication");
const router = express.Router();

//CREATE task
router.post("/",authentication, TaskController.create);

//GET tasks

router.get("/", TaskController.getAll);

//GET task BY ID

router.get("/id/:_id", TaskController.getById);

//GET TASK BY TITLE OPT 1

// router.get("/title/:title", async(req, res) => {
//         try {
//             if (req.params.title.length > 20) {
//                 return res.status(400).send('Búsqueda demasiado larga')
//             }

//             const title = new RegExp(req.params.title, "i");
//             const tasks = await Task.find({ title });
//             res.send(tasks);
//         } catch (error) {
//             console.log(error);
// res
// .status(500)
// .send({ message: "There was a problem trying to get the post", error });
//         }
//     }),
//GET TASK BY TITLE OPT 2 POR ÍNDICE (Para que esto funcione le he añadido el índice en el modelo)

router.get("/title/:title", TaskController.getByTitle),
  //UPDATE TASK

router.put("/id/:_id", TaskController.update),
  //DELETE TASK

router.delete("/id/:_id", TaskController.delete);

//** ENDPOINT EXTRA*/
router.get("/tasksWithPagination", TaskController.getAllWithPagination);

module.exports = router;
