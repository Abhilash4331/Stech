import Post from "~/server/models/Post";

export default defineEventHandler(async () => {
    try {
        const result = await Post.find({  })
        return result
    } catch (error) {
        console.log(err)
    }
})