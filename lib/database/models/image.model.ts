import { Schema, model, models } from "mongoose";

interface Image {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: Schema.Types.ObjectId | string; // Assuming Schema.Types.ObjectId is imported from Mongoose
    createdAt: Date;
    updatedAt: Date;
}

// Assuming the Schema.Types.ObjectId and URL types are imported from Mongoose
// If not, you need to define them in your code or use alternatives



const ImageSchema = new Schema({
    title:{type:String, required:true},
    transformationType:{type:String, required:true},
    publicId:{type:String, required:true},
    secureUrl:{type:URL, required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type:URL},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId, ref:'User'},
    createdAt:{type:Date, default: Date.now},
    updatedAt:{type:Date, default: Date.now}

    
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image