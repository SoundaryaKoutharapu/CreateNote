import ratelimit from "../config/upstash.js";


const rateLimiter =  async (req,res,next)=>
{
    try {
        const {success}= await ratelimit.limit("my-limit-key");

        if(!success)
        {
            res.status(429).json({message: "too many requests"})
        }
        next();
    } catch (error) {
        console.log(error);
        next();
    }
}

export default rateLimiter
