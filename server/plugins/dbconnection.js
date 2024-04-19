import mongoose from "mongoose";
export default async () => {
    const Config = useRuntimeConfig()
    try {
        const DB_OPTIONS = {
            dbName: Config.dbName,
        }
        await mongoose.connect(Config.dburl, DB_OPTIONS)
        console.log("Connected to DB")
    } catch (error) {
        console.log(err);
    }
}