// import '../index.css'
import toast from "react-hot-toast"


export const Home = () => {
  return (
    <div data-theme="forest">
          <button onClick={()=>toast.success("heloo")}  class="bg-blue-500 text-white p-4 rounded">click here</button>  
          <button className="btn">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>

    </div>
  )
}