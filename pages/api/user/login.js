import connectDb from '@/utils/database';
import { userModel } from '@/utils/schemaModels';
import jwt from 'jsonwebtoken';

export default async function loginUser(req, res) {
  const secret_key = 'nextmarket';
  try {
    await connectDb();
    const savedData = await userModel.findOne({ email: req.body.email });
    if (req.body.password === savedData.password) {
      const paylord = { email: req.body.emai };
      const token = jwt.sign(paylord, secret_key, { expiresIn: '23h' });
      console.log(token);
      return res.status(200).json({ message: 'ログイン成功', token: token });
    } else {
      return res.status(400).json({ message: 'ログイン失敗：パスワードミス' });
    }
  } catch (err) {
    return res.status(400).json({ message: 'ログイン失敗' });
  }
}
