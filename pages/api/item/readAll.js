import connectDb from '@/utils/database';
import { itemModel } from '@/utils/schemaModels';

export default async function getAllItems(req, res) {
  try {
    await connectDb();
    const allItems = await itemModel.find();
    return res.status(200).send({
      message: 'すべてのアイテム情報を取得しました',
      allItems: allItems,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'すべてのアイテム情報の取得に失敗しました' });
  }
}
