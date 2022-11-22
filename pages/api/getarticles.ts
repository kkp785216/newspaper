import article from "../../models/article";
import connectDB from "../../middleware/mongoose"
import comment from "../../models/comment";

const handler = async (req, res) => {
    const maxLimit = 20;
    const articleWidhCommentCount = async (articleArr) => {
        let commentcountreq = articleArr.map(article=>(comment.find({post: article.url}).count()));
        let commentcount = await Promise.all(commentcountreq);
        return JSON.parse(JSON.stringify(articleArr)).map((article,index)=>({...article, commentCount: commentcount[index]}));
    }
    if (req.query.uses === 'allarticles' && req.query.limit && req.query.page) {
        const limit = req.query.limit <= maxLimit ? req.query.limit : maxLimit
        let count = await article.find().count();
        let articles = await article.find().sort({ createdAt: 'desc' }).limit(limit).skip((req.query.page - 1) * limit);
        res.status(200).json({
            articles: await articleWidhCommentCount(articles),
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit),
            max_limit: maxLimit,
            total_articles: count,
        });
    }
    else if (req.query.uses === 'singlearticle' && req.query.slug) {
        try {
            let articles = await article.findOne({ 'url': req.query.slug });
            articles ? res.status(200).json({ article: articles }) : res.status(501).json({ error: 'Document doesn\'t exist' })
        } catch (error) {
            res.status({ error: 'internal server error', message: error.message });
        }
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
                let count = await article.find().or([{ parent_category: req.query.category }, { category: req.query.category }]).count();
                let res = await article.find().or([{ parent_category: req.query.category }, { category: req.query.category }]).sort({ [req.query.sortby]: req.query.order }).limit(limit).skip((req.query.page - 1) * limit);
                return { res, count };
            }
            else if (req.query.type == 'category') {
                let count = await article.find({ category: req.query.category }).count();
                let res = await article.find({ category: req.query.category }).sort({ [req.query.sortby]: req.query.order }).limit(limit).skip((req.query.page - 1) * limit);
                return { res, count };
            }
            else if (req.query.type == 'sub_category') {
                let count = await article.find({ sub_category: req.query.category }).count();
                let res = await article.find({ sub_category: req.query.category }).sort({ [req.query.sortby]: req.query.order }).limit(limit).skip((req.query.page - 1) * limit);
                return { res, count };
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
    else if (req.query.uses === 'relatedposts' && req.query.slug && req.query.type && req.query.limit && req.query.page) {
        let ref = await article.findOne({ 'url': req.query.slug });
        const limit = req.query.limit <= maxLimit ? req.query.limit : maxLimit
        let articles = await (async () => {
            if (req.query.type == 'parent') {
                let count = await article.find().or([{ parent_category: ref.category }, { category: ref.category }]).nor([{ url: req.query.slug }]).count();
                let res = await article.find().or([{ parent_category: ref.category }, { category: ref.category }]).nor([{ url: req.query.slug }]).limit(limit).skip((req.query.page - 1) * limit);
                return { res, count };
            }
            else if (req.query.type == 'category') {
                let count = await article.find({ category: ref.category }).nor([{ url: req.query.slug }]).count();
                let res = await article.find({ category: ref.category }).nor([{ url: req.query.slug }]).limit(limit).skip((req.query.page - 1) * limit);
                return { res, count };
            }
            else if (req.query.type == 'sub_category') {
                let count = await article.find({ sub_category: ref.category }).nor([{ url: req.query.slug }]).count();
                let res = await article.find({ sub_category: ref.category }).nor([{ url: req.query.slug }]).limit(limit).skip((req.query.page - 1) * limit);
                return { res, count };
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
    else if (req.query.uses === 'prevnext' && req.query.slug) {
        try {
            let nextprevRef = await article.findOne({ 'url': req.query.slug });
            let prev = await article.findOne({ _id: { $lt: nextprevRef._id } }).sort({ _id: -1 }).limit(1);
            let next = await article.findOne({ _id: { $gt: nextprevRef._id } }).sort({ _id: 1 }).limit(1);
            res.status(200).json({
                prev, next
            });

        } catch (error) {
            res.status(404).json({ error: 'internal server error', message: error.message });
        }
    }
    else {
        res.status(404).json({ error: 'Please provide a valid parameter' });
    }
}

export default connectDB(handler);