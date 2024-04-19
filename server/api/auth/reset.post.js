import jwt from 'jsonwebtoken';
import User from '~/server/models/User';

export default defineEventHandler(async (event) => {
  try {
    const { token, password, oldPassword } = await readBody(event);

    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    const userId = decodedToken.userId;

    const user = await User.findById(userId);

    if (!user) {
      return {
        status: 403,
        error: 'Invalid token',
      };
    }

    if (user.password !== oldPassword) {
      return {
        status: 403,
        error: 'Wrong password',
      };
    }

    user.password = password; // Update password
    await user.save();

    return {
      status: 200,
      message: 'Password reset successfully',
    };
  } catch (error) {
    console.error('Error resetting password:', error.message);
    return {
      status: 500,
      error: 'Error resetting password',
    };
  }
});
