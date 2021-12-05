import { Router } from 'express';
import { adaptExpressRoute } from '@/libs/adapters';
import { makeFizzBuzzService } from './factory/service.factory';

const router = Router();

router.post('/', adaptExpressRoute(makeFizzBuzzService()))

export const fizzBuzzRouter = router;
