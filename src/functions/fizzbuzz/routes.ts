import { Router } from 'express';
import { adaptExpressRoute } from '@/libs/adapters';
import { makeFizzBuzzService } from './factory/service.factory';
import { FizzBuzzValidation } from './validation';

const router = Router();

router.post('/', FizzBuzzValidation, adaptExpressRoute(makeFizzBuzzService()))

export const fizzBuzzRouter = router;
