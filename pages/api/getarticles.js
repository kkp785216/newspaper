import article from "../../models/article";
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if(req.query.uses === 'allarticles' && req.query.limit && req.query.page){
        let articles = await article.find().limit(req.query.limit).skip((req.query.page - 1) * req.query.limit);
        res.status(200).json({ articles });
    }
    res.status(404).json({ error: 'Please provide a valid parameter' });
}

export default connectDB(handler);