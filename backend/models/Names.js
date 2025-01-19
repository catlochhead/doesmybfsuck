import mongoose from "mongoose";


const nameSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    }
);

const Name = mongoose.model('Name', nameSchema);

export default Name;
