import auth from '@/utils/auth';
import connectDb from '@/utils/database';
import { itemModel } from '@/utils/schemaModels';

const deleteItem = async (req, res) => {
  try {
    await connectDb();
    const singleItem = await itemModel.findById(req.query.id);
    if (singleItem.email === req.body.email) {
      await itemModel.deleteOne({ _id: req.query.id });
      return res.status(200).send({ message: 'アイテムを削除しました' });
    } else {
      return new Error();
    }
  } catch (err) {
    return res.status(400).json({ message: 'アイテムの削除に失敗しました' });
  }
};
export default auth(deleteItem);