import dotenv from "dotenv";

dotenv.config()

const config = {
    database: process.env.DATABASE_URL || 'mongodb://localhost:27017/forum_api',
    secret_key: "$33n^#%d#222$f!"
}

export default config