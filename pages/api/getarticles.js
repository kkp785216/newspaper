import article from "../../models/article";
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    const maxLimit = 20;
    if (req.query.uses === 'allarticles' && req.query.limit && req.query.page) {
        const limit = req.query.limit <= maxLimit ? req.query.limit : maxLimit
        let count = await article.find().count();
        let articles = await article.find().sort({ createdAt: 'desc' }).limit(limit).skip((req.query.page - 1) * limit);
        res.status(200).json({
            articles,
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit),
            max_limit: maxLimit,
            total_articles: count,
        });
    }
    else if (req.query.uses === 'popular' && req.query.limit && req.query.page) {
        const limit = req.query.limit <= maxLimit ? req.query.limit : maxLimit
        let count = await article.find().count();
        let articles = await article.find().sort({ views: 'desc' }).limit(limit).skip((req.query.page - 1) * limit);
        res.status(200).json({
            articles,
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit),
            max_limit: maxLimit,
            total_articles: count,
        });
    }
    else if (req.query.uses === 'articlesbycategory' && req.query.category && req.query.type && req.query.sortby && req.query.order && req.query.limit && req.query.page) {
        const limit = req.query.limit <= maxLimit ? req.query.limit : maxLimit
        let articles = await (async () => {
            if (req.query.type == 'parent') {
                let count = await article.find().or([{ parent_category: req.query.category}, {category: req.query.category}]).count();
                let res = await article.find().or([{ parent_category: req.query.category}, {category: req.query.category}]).sort({ [req.query.sortby]: req.query.order }).limit(limit).skip((req.query.page - 1) * limit);
                return {res, count};
            }
            else if (req.query.type == 'category') {
                let count = await article.find({ category: req.query.category }).count();
                let res = await article.find({ category: req.query.category }).sort({ [req.query.sortby]: req.query.order }).limit(limit).skip((req.query.page - 1) * limit);
                return {res, count};
            }
            else if (req.query.type == 'sub_category') {
                let count = await article.find({ sub_category: req.query.category }).count();
                let res = await article.find({ sub_category: req.query.category }).sort({ [req.query.sortby]: req.query.order }).limit(limit).skip((req.query.page - 1) * limit);
                return {res, count};
            }
        })();
        res.status(200).json({
            articles: articles.res,
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit),
            max_limit: maxLimit,
            total_articles: articles.count,
        });
    }
    else {
        res.status(404).json({ error: 'Please provide a valid parameter' });
    }
}

export default connectDB(handler);