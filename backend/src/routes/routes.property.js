import {Router} from 'express'
import { verifyJWT } from '../middlewares/verifyJwt.js'
import { addProperty } from '../controllers/property.controllers.js'


const router = Router()

router.route('/add-property').post(verifyJWT, addProperty)


export default router