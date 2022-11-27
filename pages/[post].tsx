import { Aside, Main, Section } from 'components/Layout'
import { Links } from 'components/Links'
import fetchapi from '../lib/api'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ForumIcon from '@mui/icons-material/Forum';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RelatedPosts from 'components/RelatedPosts';
import DisplayComments from 'components/DisplayComments';
import AddComments from 'components/AddComments';
import MostPopular from 'components/MostPopular';
import RecentComments from 'components/RecentComments';
import PostShare from 'components/elements/PostShare';
import wrapper from 'redux/store';
import action from '../redux/action'

const Post = ({ article, nextprev, route, comments, related, recentcomments }) => {
    return (
        <div className='-mt-5'>
            <Section>
                <Main>
                    {/* Breadcrumb */}
                    <div>
                        <ul className='flex -m-0.5 text-xs'>
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to='/'>Home</Links><NavigateNextIcon style={{ fontSize: '12px' }} /></li>
                            {article.parent_category && <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to={`/category/${article.parent_category}`}>{article.parent_category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Links><NavigateNextIcon style={{ fontSize: '12px' }} /></li>}
                            <li className='p-0.5 text-[#747474]'><Links className='hover:text-black' to={`/category/${article.parent_category}/${article.category}`}>{article.category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Links><NavigateNextIcon style={{ fontSize: '12px' }} /></li>
                            <li className='p-0.5 text-[#747474]'>{article.title}</li>
                        </ul>
                    </div>
                    <div className='mt-3.5'>
                        <div className="flex text-[10px] text-white">
                            {article.parent_category && <span className='py-[3px] px-[6px] bg-[#8224e3] tracking-[0.8px] block mb-[5px] mr-[5px] whitespace-nowrap'><Links to={`/category/${article.parent_category}`}>{article.parent_category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Links></span>}
                            <span className='py-[3px] px-[6px] bg-[#6850e0] tracking-[0.8px] block mb-[5px] mr-[5px] whitespace-nowrap'><Links to={`/category/${article.category}`}>{article.category.split('-').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')}</Links></span>
                        </div>
                    </div>
                    <div className='mt-3.5'>
                        <h1 className='mb-4 font-normal text-[35px] leading-[46px]'>{article.title}</h1>
                        <p className='italic text-[#2e2e2e] text-lg font-extralight'>The full member list of the Trump Leadership Council, a group of corporate influencers who guided the president&#39;s anti-regulatory policy blitz.</p>
                    </div>
                    <div className='mt-5'>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-11px font-medium text-[#444] flex items-center"><img className='w-5 h-5 mr-3 rounded-full' src="/img/user.png" alt="" /><strong className="text-black mr-3"><Links to="/krishna">Krishna Prajapati</Links></strong> Aug 17, 2022</span>
                            <div className='flex space-x-5'>
                                <div className='text-xs flex items-center'><VisibilityIcon className='mr-1 text-[#444]' style={{ fontSize: '14px' }} /> {article.views}</div>
                                <div className='text-xs flex items-center'><ForumIcon className='mr-1 text-[#444]' style={{ fontSize: '14px' }} /> {comments.total_comments}</div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <PostShare />
                    </div>
                    <div className="mt-5">
                        <img className='' src={article.img_url ? article.img_url : `/img/articles/flash/${article.img_comp}.jpg`} alt={article.title}></img>
                    </div>
                    <div className='mt-7 tracking-[0.2px] text-[16.4px]'>
                        <p className='max-w-[600px] mx-auto'>We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family&#39;s small dining room for breakfast.</p>
                        <strong className='max-w-[600px] block mt-7 mx-auto'>Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a beautiful picture.</strong>
                        <p className='max-w-[600px] mx-auto mt-7'>We were making our way to the Rila Mountains, where we were visiting the Rila Monastery where we enjoyed scrambled eggs, toast, mekitsi, local jam and peppermint tea.</p>
                        <figure className='mt-7'>
                            <img src="/img/girl2.jpg" alt="" />
                            <figcaption className='italic text-xs py-1'>Adderall and flirting with bulimia in an attempt to whittle herself</figcaption>
                        </figure>
                        <p className='max-w-[600px] mx-auto mt-7'>We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded. I&#39;m not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn&#39;t venture far from the main church, but I didn&#39;t feel overwhelmed by tourists in the monastery.</p>
                        <figure className='mt-7 float-right max-w-[307px] ml-6 mb-5'>
                            <img src="/img/boy1.jpg" alt="" />
                            <figcaption className='italic text-xs py-1'>Adderall and flirting with bulimia in an attempt to whittle herself</figcaption>
                        </figure>
                        <p className='max-w-[600px] mx-auto mt-7'>Headed over Lions Bridge and made our way to the Sofia Synagogue, then sheltered in the Central Market Hall until the recurrent (but short-lived) mid-afternoon rain passed.</p>
                        <p className='max-w-[600px] mx-auto mt-7'>Feeling refreshed after an espresso, we walked a short distance to the small but welcoming Banya Bashi Mosque, then descended into the ancient Serdica complex.</p>
                        <p className='max-w-[600px] mx-auto mt-7'>We were exhausted after a long day of travel, so we headed back to the hotel and crashed.</p>
                        <p className='max-w-[600px] mx-auto mt-7'>I had low expectations about Sofia as a city, but after the walking tour I absolutely loved the place. This was an easy city to navigate, and it was a beautiful city – despite its ugly, staunch and stolid communist-built surrounds. Sofia has a very average facade as you enter the city, but once you lose yourself in the old town area, everything changes.</p>
                        <blockquote><p className='text-[#4db2ec] italic text-[31px] text-center mt-7'>IF YOU HAVE IT, YOU CAN MAKE ANYTHING LOOK GOOD</p></blockquote>
                        <p className='max-w-[600px] mx-auto mt-7'>Clothes can transform your mood and confidence. Fashion moves so quickly that, unless you have a strong point of view, you can lose integrity. I like to be real. I don&#39;t like things to be staged or fussy. I think I&#39; go mad if I didn&#39;t have a place to escape to. You have to stay true to your heritage, that’s what your brand is about.</p>
                    </div>
                    <div className='pt-7 pb-6 mt-7 border-t border-b'>
                        <PostShare />
                    </div>
                    {(nextprev.prev || nextprev.next) && <div className='mt-7 flex'>
                        {nextprev.prev && <div className='w-1/2 pr-4'>
                            <span className='text-xs text-[#747474] justify-start flex-1'>Previous article</span>
                            <Links className='block text-[14px] font-medium hover:text-sky-400 transition-colors' to={`/${nextprev.prev.url}`}>{nextprev.prev.title}</Links>
                        </div>}
                        {nextprev.next && <div className='w-1/2 pl-4 justify-end flex-1'>
                            <span className='text-xs text-[#747474] block text-right'>Next article</span>
                            <Links className='block text-[14px] font-medium text-right hover:text-sky-400 transition-colors' to={`/${nextprev.next.url}`}>{nextprev.next.title}</Links>
                        </div>}
                    </div>}
                    <div className="mt-7 flex p-[21px] border">
                        <div className='w-[18%]'><a href='https://kkp785216.github.io/krishna-portfolio/' target='_blank' rel='noreferrer'><img className='w-full' src="/img/user.png" alt="" title='Krishna Prajapati' /></a></div>
                        <div className='w-[82%] pl-[21px]'>
                            <a className='font-semibold hover:text-sky-400 block' href='https://kkp785216.github.io/krishna-portfolio/' target='_blank' rel='noreferrer'>Krishna Prajapati</a>
                            <span className='block italic text-xs mt-2 hover:text-sky-400'><a href='https://kkp785216.github.io/krishna-portfolio/' target='_blank' rel='noreferrer'>https://kkp785216.github.io/krishna-portfolio/</a></span>
                            <p className='text-[13.5px] mt-2'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ac vehicula leo. Donec urna lacus gravida ac vulputate sagittis tristique vitae lectus. Nullam rhoncus tortor at dignissim vehicula.</p>
                            <div className='flex mt-4 mb-2'>
                                <a className='mr-5' href='http://facebook.com' target='_blank' rel='noreferrer'><img className='w-[14px]' src="/img/social/facebook.png" alt="" /></a>
                                <a className='mr-5' href='http://instagram.com' target='_blank' rel='noreferrer'><img className='w-[14px]' src="/img/social/instagram.png" alt="" /></a>
                                <a className='mr-5' href='http://twitter.com' target='_blank' rel='noreferrer'><img className='w-[14px]' src="/img/social/twitter.png" alt="" /></a>
                                <a href='http://youtube.com' target='_blank' rel='noreferrer'><img className='w-[14px]' src="/img/social/youtube.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    {related.total_articles > 0 && <div className='mt-11' key={route}>
                        <RelatedPosts related={related} route={route} />
                    </div>}
                    {comments.total_comments > 0 && <div className='mt-11'>
                        <div className="border-b-2 w-full mb-6 border-black">
                            <span className="w-fit block px-3 pt-1 pb-0.5 uppercase text-sm text-white bg-black">{comments.total_comments} Comments</span>
                        </div>
                        <DisplayComments comments={comments} route={route} />
                    </div>}
                    <div className='mt-11'>
                        <div className="w-full mb-2.5">
                            <span className="w-fit block uppercase text-[17px] font-medium">Leave A Reply</span>
                        </div>
                        <AddComments route={route} />
                    </div>
                </Main>
                <Aside>
                    <MostPopular />
                    <div className='mt-7 md:mt-11'>
                        <RecentComments recentcomments={recentcomments} />
                    </div>
                </Aside>
            </Section>
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const { params, res } = context;
    const routes = await fetchapi('getroutes?uses=articles', `${process.env.NEXT_PUBLIC_HOST}`);
    if (routes.routes.find(route => route.url === params.post)) {
        let article = await fetchapi(`getarticles?uses=singlearticle&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
        let nextprev = await fetchapi(`getarticles?uses=prevnext&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
        let comments = await fetchapi(`getcomments?uses=comment&post=${params.post}&limit=3&page=1`, `${process.env.NEXT_PUBLIC_HOST}`);
        let related = await fetchapi(`getarticles?uses=relatedposts&type=category&limit=3&page=1&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
        let recentcomments = await fetchapi(`getcomments?uses=recentcomment&limit=4&page=1`, `${process.env.NEXT_PUBLIC_HOST}`);
        store.dispatch(action({
            type: 'MOST_POPULAR',
            page: 1
        }));
        return {
            props: { article: article.article, nextprev, route: params.post, comments, related, recentcomments }, // will be passed to the page component as props
        }
    }
    else {
        res.statusCode = 404
        return {
            notFound: true,
            props: {
                error: `couldn't find the thing`
            },
        }
    }
});
export default Post