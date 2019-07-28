const router = require(express).Router();
const bookController = require("../../controllers/books")

router.route("/")
.get(bookController.findAll)
.post(bookController.create)

router
.route("/:id")
.get(bookController.findById)
.put(bookController.updte)
.delete(bookController.remove)