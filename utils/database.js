import mongoose from 'mongoose';

export default async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log('Seccess: connected to Mongoose');
  } catch (err) {
    console.log(err);
    throw new err();
  }
}
