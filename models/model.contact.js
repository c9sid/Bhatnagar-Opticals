import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    concern: {
        type: String,
        required: true,
    },
    whatsappOptIn: {
        type: Boolean,
    },
},
    {
        timestamps: true
    }
)

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema)