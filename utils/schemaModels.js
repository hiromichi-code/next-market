import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  image: String,
  price: String,
  description: String,
  email: String,
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const itemModel =
  mongoose.models.Item || mongoose.model('Item', itemSchema);
export const userModel =
  mongoose.models.User || mongoose.model('User', userSchema);
