import connectDb from '@/utils/database';
import { userModel } from '@/utils/schemaModels';

export default async function registerUser(req, res) {
  try {
    await connectDb();
    await userModel.create(req.body);
    return res.status(200).send({ message: 'ユーザー登録成功' });
  } catch (err) {
    return res.status(400).json({ message: 'ユーザー登録失敗' });
  }
}
