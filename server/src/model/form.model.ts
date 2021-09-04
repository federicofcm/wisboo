import mongoose from 'mongoose';

export interface FormDocument extends mongoose.Document {
    id: number
    name: string;
    description: string;
    questions: [];
    active: Boolean;
    createdAt: Date;
    updatedAt: Date;
} 

const FormSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        questions: [{
            question_type: {type: String, enum: ['Seleccion multiple', 'Seleccion simple', 'Texto'], default: 'Texto'},
            text: {type: String, required: true},
            options: {type: []}
        }],
        active: {type: Boolean, default: true}
    },
    {
        timestamps: true,
    }
)

FormSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.__v;
    return obj;
   }

const Form = mongoose.model<FormDocument>("Form", FormSchema);

export default Form;