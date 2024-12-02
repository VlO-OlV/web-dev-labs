import mongoose from 'mongoose';

const textItemSchema = new mongoose.Schema({
  content: {
    type: String,
    maxLength: 20,
    minLength: 1,
    required: true,
  },
  firstColor: {
    type: String,
    match: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  },
  secondColor: {
    type: String,
    match: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  },
  spacing: {
    type: Number,
    max: 10,
  },
  duration: {
    type: Number,
    min: 0.1,
    max: 2,
  },
});

const TextItem = mongoose.model('TextItem', textItemSchema);

export default TextItem;