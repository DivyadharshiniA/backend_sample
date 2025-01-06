import express from 'express';
import { create, fetch ,update,deleted} from '../controller/userController.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleted);

export default router;


// import express from 'express';
// const router = express.Router();

// // Example route
// router.get("/", (req, res) => {
//   res.send("User route works!");
// });

// export default router;

