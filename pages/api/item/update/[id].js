import auth from '@/utils/auth';
import connectDb from '@/utils/database';
import { itemModel } from '@/utils/schemaModels';

const updateItem = async (req, res) => {
  try {
    await connectDb();
    const singleItem = await itemModel.findById(req.query.id);
    if (singleItem.email === req.body.email) {
      await itemModel.updateOne({ _id: req.query.id }, req.body);
      return res.status(200).send({ message: 'アイテムの編集に成功しました' });
    } else {
      throw new Error();
    }
  } catch (err) {
    return res.status(400).json({ message: 'アイテムの編集に失敗しました' });
  }
};

export default auth(updateItem);
