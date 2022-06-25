import 'dotenv/config'
import { app } from './src/app'
import { logger } from './src/utils/logger'

app.listen(process.env.PORT || 8000, () => {
    logger.info(`[HTTP] => Server is running on port ${process.env.PORT || 8000}`);
})