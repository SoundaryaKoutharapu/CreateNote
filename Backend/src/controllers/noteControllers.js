import Note from "../model/Note.js"

export const getAllRoutes = async (req,res)=>
{
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
        
    } catch (error) {
        console.log(error);
        
    } 
}


export const createNote = async (req,res)=>
{
    try {
            const{title, content} = req.body
            const newNote = new Note({title, content}) 

            await newNote.save();
            res.status(200).json({message: "note created successfully"})

    } catch (error) {
        console.log("internal serval error");
        
    }
}


export const updateNote = async (req,res)=>
{
        try {
            const {title, content} = req.body
            const note = await Note.findByIdAndUpdate(req.params.id, {title, content})
            if(!updateNote)
            {
                res.status(404).json({message: "Note not found"})
            }       
            else
            {
                res.status(200).json({message: "note updated successfully"})
            }
          } catch (error) {
            console.log(error);
            res.status(500).json({message:"internal server error"})
         }
}


export const deleteNote = async (req,res)=>
{
    try {
        const {title, content} = req.body;
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote)
        {
            res.status(404).json({message: "note not found"});
        }
        else
            res.status(200).json({message: "note deleted successfully"});
    } catch (error) {
        res.status(404).json({message: "internal server error"})
    }
}



export const getNoteById = async (req,res)=>
{
    try {    
      const {title, content} = req.body;
      const note = await Note.findById(req.params.id, {title, content})

      if(!getNoteById)
      {
        res.status(404).json("note not found")
      }
      else
      {
        res.status(200).json("note retrived successfully");
      }
 } catch (error) {
        res.status(500).json({message: "internal server error"});       
      }
}