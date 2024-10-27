import { Routes, Route } from 'react-router-dom';
import ForumList from '../../components/ForumList/ForumList';
import CategoryDetail from '../../components/CategoryDetail/CategoryDetail';

const Forum = () => {
    return (
        <Routes>
            <Route path="/" element={<ForumList />} />
            <Route path="/category/:categoryId" element={<CategoryDetail />} />
        </Routes>
    );
}

export default Forum;