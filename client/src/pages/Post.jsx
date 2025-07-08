import {useParams} from 'react-router-dom';

const Post = () => {
    const slug = useParams();
    return <div className='p-8 text-center text-2xl'>
        📄 Blog Post: {slug}
    </div>
};

export default Post;