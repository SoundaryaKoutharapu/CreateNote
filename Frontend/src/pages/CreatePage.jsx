import toast from "react-hot-toast"

export const CreatePage = () => {
  return (
    <>
        <button onClick={()=>toast.error("error occured")} className="btn btn-secondary">Click-here</button>
        
    </>
  )
}
