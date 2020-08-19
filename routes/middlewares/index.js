import { Router } from 'express';

import authorization from './authorization';

const router = Router();

router.use('/authorization', authorization);

export default router;