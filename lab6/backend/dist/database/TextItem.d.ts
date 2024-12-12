import mongoose from 'mongoose';
declare const TextItem: mongoose.Model<{
    content: string;
    firstColor?: string;
    secondColor?: string;
    spacing?: number;
    duration?: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    content: string;
    firstColor?: string;
    secondColor?: string;
    spacing?: number;
    duration?: number;
}> & {
    content: string;
    firstColor?: string;
    secondColor?: string;
    spacing?: number;
    duration?: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    content: string;
    firstColor?: string;
    secondColor?: string;
    spacing?: number;
    duration?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    content: string;
    firstColor?: string;
    secondColor?: string;
    spacing?: number;
    duration?: number;
}>> & mongoose.FlatRecord<{
    content: string;
    firstColor?: string;
    secondColor?: string;
    spacing?: number;
    duration?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default TextItem;
