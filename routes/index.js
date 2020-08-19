import { Router } from 'express';

import controllers from './controllers';
import middlewares from './middlewares';
import users from './users';

const router = Router();

router.use('/controllers', controllers);
router.use('/middlewares', middlewares);
router.use('/users', users);

export default router;