import { Router } from 'express';

import { getAll, create } from './product.controller';

const routes = Router();

routes.get('/', getAll);
routes.post('/', create);

export default routes;