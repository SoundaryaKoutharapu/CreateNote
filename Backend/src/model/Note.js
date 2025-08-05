import mongoose from 'mongoose'

// 1 - create a schema
// 2 - model based off that schema


const noteSchema = mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true,
        },
        content:
        {
            type: String,
            required: true,
        },
    },
    {timestapms: true}
)


const Note = mongoose.model("Note", noteSchema)

export default Note