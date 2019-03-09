import mongoose, { Schema } from 'mongoose';
import Sms from './Sms';

const contactSchema = new Schema({
  name: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// cascade when deleting a contact
contactSchema.pre('remove', function (next) {
  Sms.remove({ sender: this._id }, err => err);
  Sms.remove({ receiver: this._id }, err => err);
  next();
});

export default mongoose.model('Contact', contactSchema);
