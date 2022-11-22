import connectDB from "../../middleware/mongoose"
import article from "../../models/article";

const handler = async (req, res) => {
    if(req.query.uses === 'articles'){
        let articles = await article.find().select('url');
        res.status(200).json({
            routes: articles,
        });
    }
    else{
        res.status(501).json({
            error: "Please provide a valid parameter",
        })
    }
}

export default connectDB(handler);