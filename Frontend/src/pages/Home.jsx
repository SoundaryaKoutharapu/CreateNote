// import '../index.css'
import toast from "react-hot-toast"
import { Navbar } from "../Components/Navbar"
import { useEffect, useState } from "react"
import RateLimitedUi from "../Components/RateLimitedUi"
import axios from 'axios'

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
    <div data-theme="forest" className="min-h-screen">
        <Navbar />
        {isRateLimited && <RateLimitedUi />}
    </div>
  )
}