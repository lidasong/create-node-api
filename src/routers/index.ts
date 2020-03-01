import * as Router from '@koa/router'
import { getList } from '../controller'

const router = Router()

router.get('/list', getList)

export default router