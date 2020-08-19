import { Router } from 'express';
import { usersController } from './controllers/usersControllers';

const router = Router();

router.post('/login', usersController.createToken);
router.post('/new', usersController.createNewUser);

module.exports = router;
