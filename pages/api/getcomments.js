import comment from '../../models/comment'
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    const maxLimit = 20;
    if (req.query.post && req.query.limit && req.query.page) {
        const limit = req.query.limit <= maxLimit ? req.query.limit : maxLimit
        let count = await comment.find({post: req.query.post}).count();
        let comments = await comment.find({post: req.query.post}).sort({ createdAt: 'desc' }).limit(limit).skip((req.query.page - 1) * limit);
        res.status(200).json({
            comments,
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit),
            max_limit: maxLimit,
            total_comments: count,
        });
    }
    else {
        res.status(404).json({ error: 'Please provide a valid parameter' });
    }
}

export default connectDB(handler);