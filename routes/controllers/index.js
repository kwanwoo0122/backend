import { Router } from 'express';

import usersControllers from './usersControllers';

const router = Router();

router.use('/usersControllers', usersControllers);

export default router;