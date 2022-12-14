import article from "../../models/article";
import connectDB from "../../middleware/mongoose"
import { post } from "../../lib/post";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        // let p = new article({
        //     parent_category: null,
        //     category: 'music',
        //     sub_category: [],
        //     title: 'Leona Lewis – Bleeding Love (Dj Dark & Adrian Funk Remix)',
        //     author: 'krishna',
        //     status: 'published',
        //     views: 52,
        //     url: 'leona-lewis-bleeding-love-dj-dark-adrian-funk-remix',
        //     date: new Date(`August 7, 2022 ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:`).getTime(),
        //     img_url: null,
        //     img_comp: '3',
        //     content: null,
        //     content_type: 'music',
        //     order: 134,
        //     template: 1
        // });
        // await p.save();

        // const myfunc = (index) => {
        //     if(index <= post.length) {
        //         let p = new article(post[index - 1])
        //         let q = p.save();
        //         q.then(e=> {
        //             myfunc(index + 1)
        //         })
        //     }
        // }
        // myfunc(1)
        res.status(200).json({ success: "your document has been saved" })
    } else {
        res.status(400).json({ error: 'This method is not allowed' })
    }
}

export default connectDB(handler);