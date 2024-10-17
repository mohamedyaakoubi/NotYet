import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForumList from '../../components/ForumList/ForumList';
import CategoryDetail from '../../components/CategoryDetail/CategoryDetail';

const Forum = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<ForumList />} />
            <Route path="/category/:categoryId" element={<CategoryDetail />} />
            </Routes>
        </Router>
    );
}

export default Forum;