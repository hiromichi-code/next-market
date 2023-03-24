import auth from '@/utils/auth';
import connectDb from '@/utils/database';
import { itemModel } from '@/utils/schemaModels';

const createItem = async (req, res) => {
  try {
    connectDb();
    await itemModel.create(req.body);
    res.status(200).send({ message: 'アイテム作成成功' });
  } catch (err) {
    return res.status(400).json({ message: 'アイテム作成失敗' });
  }
};

export default auth(createItem);
