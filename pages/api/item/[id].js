import connectDb from '@/utils/database';
import { itemModel } from '@/utils/schemaModels';

export default async function getSingleItem(req, res) {
  try {
    await connectDb();
    const singleItem = await itemModel.findById(req.query.id);
    return res.status(200).send({
      message: '1つのアイテム情報を取得しました',
      singleItem: singleItem,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: '1つのアイテム情報の取得に失敗しました' });
  }
}
