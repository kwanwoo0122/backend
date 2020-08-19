import { model, Schema } from 'mongoose';

const User = new Schema({
  user_id: String,
  user_pw: String,
});

export default model('Users', User);