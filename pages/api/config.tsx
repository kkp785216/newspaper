import config from "../../models/config";
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'GET') {
        let configration = await config.find();
        res.status(200).json({
            config: configration[0]
        });
    }
    else if (req.method == 'POST') {
        // let p = new config({
        //     menu: [
        //         { url: 'fashion', type: 'parent', menu_type: 'mega' },
        //         { url: 'gadgets', type: 'category', menu_type: 'mega' },
        //         { url: 'photography', type: 'category', menu_type: 'mega' },
        //         { url: 'lifestyle', type: 'parent', menu_type: 'normal' },
        //         { url: 'design', type: 'parent', menu_type: 'normal' },
        //     ],
        //     menu_background: '/img/mobile-bg1.jpg',
        //     footer_background: '/img/footer-bg.jpg'
        // });
        // await p.save();
        res.status(200).json({
            class: '12th'
        });
    }
    else {
        res.status(501).json({
            error: 'This action is not allowed'
        });
    }
}

export default connectDB(handler);