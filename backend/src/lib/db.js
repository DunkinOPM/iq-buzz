import mongoose from 'mongoose'

import {ENV} from './env.js'

export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("✅ Database connected : ",conn.connection.host)
    }catch(error){
        console.log("❌ Error conneecting to db : ",error)
        process.exit(1)
    }
}