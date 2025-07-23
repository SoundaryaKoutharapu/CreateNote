

const getAllRoutes = (req,res)=>
{
    res.status(200).send("note retrived successfully") 
}

const createNote = (req,res)=>
{
    res.status(201).json({message: "note created successfully"})
}

const updateNote = (req,res)=>
{
    res.status(200).json({message: "note updated successfully"})
}

const deleteNote = (req,res)=>
{
    res.status(200).json({message: "note deleted successfully"})
}