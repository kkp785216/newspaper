import comment from '../../models/comment'
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST' && req.query.comment && req.query.name && req.query.email && req.query.post) {
        let p = new comment({
            comment: req.query.comment,
            name: req.query.name,
            email:req.query.email,
            website: req.query.website ? req.query.website : null ,
            post: req.query.post,
        });
        await p.save();
        res.status(200).json({ success: "your document has been saved" })
    } else {
        res.status(400).json({ error: 'This method is not allowed' })
    }
}

export default connectDB(handler);