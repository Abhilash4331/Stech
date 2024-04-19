import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
    try {
        const { email, password } = await readBody(event);
        const olduser = await User.findOne({ email: email })

        if (olduser) {
            return {
                status: 403,
                error: 'User already exists'
            }
        }
        const newUser = new User({ email, password });
        const user = await newUser.save();
        
        return { data: user,  message: 'User registered successfully' };
    } catch (error) {
        console.log(error.message)
      return {
        status: 500,
        error: 'Error registering user'
      };
    }
})