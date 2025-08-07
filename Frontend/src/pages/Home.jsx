// import '../index.css'
import toast from "react-hot-toast"
import { Navbar } from "../Components/Navbar"
import { useEffect, useState } from "react"
import RateLimitedUi from "../Components/RateLimitedUi"
import axios from 'axios'
import NoteCard from "../Components/NoteCard"

export const Home = () => {
  const [isRateLimited, setRateLimited] = useState(false)
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>
  {
      const fetchNotes = async ()=>
      {
          try {
          const res = await axios.get('http://localhost:5000/api/notes');
          // const data = await res.json();
          console.log(res.data);
          setNotes(res.data);
          setRateLimited(false);
          } 
          catch (error) {
            console.log(error);
            if(error.response.status===429)
            {
                setRateLimited(true);
            }
            else
            {
              toast.error("failed to load")
            }
          }
          finally
          {
            setLoading(false);
          }
      }
fetchNotes();
  }, [])

  return (
    <div className="min-h-screen">
        <Navbar />
        {isRateLimited && <RateLimitedUi />}

        <div className="max-w-7xl mx-auto p-4 mt-6">
          {loading && <div className="text-center text-primary py-10">Loading Notes......</div>}

          {notes.length>0 && !isRateLimited && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {notes.map((note)=>
              {
                return (
                //   <div>
                //   {note.title} | {note.content}
                // </div>
                <NoteCard  key={note._id} note={note}/> 
                )
              })}
            </div>
          )}
        </div>
    </div>
  )
}