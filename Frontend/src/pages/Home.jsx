// import '../index.css'
import toast from "react-hot-toast"
import { Navbar } from "../Components/Navbar"
import { useState } from "react"
import RateLimitedUi from "../Components/RateLimitedUi"


export const Home = () => {
  const [isRateLimited, setRateLimited] = useState(false)

  return (
    <div data-theme="forest" className="min-h-screen">
        <Navbar />
        {isRateLimited && <RateLimitedUi />}
    </div>
  )
}