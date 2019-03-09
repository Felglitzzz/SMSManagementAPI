import mongoose, { Schema } from 'mongoose';

const smsSchema = new Schema({
  message: String,
  sender: {
    type: Schema.Types.ObjectId, ref: 'Contact',
  },
  receiver: {
    type: Schema.Types.ObjectId, ref: 'Contact',
  },
  status: {
    type: String,
    enum: ['pending', 'sent'],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Sms', smsSchema);
