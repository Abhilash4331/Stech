// Import JWT library
import jwt from 'jsonwebtoken';
import User from '~/server/models/User';

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event);
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return {
        status: 403,
        error: 'Invalid credentials',
      };
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    return {
      data: { user, token },
      message: 'User logged in successfully',
    };
  } catch (error) {
    console.error(error.message);
    return {
      status: 500,
      error: 'Error logging in user',
    };
  }
});
