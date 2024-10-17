import Sidebar from "../../components/Sidebar/Sidebar";
import PostList from "../../components/PostList/PostList";
import YouTubePlayer from "../../components/YouTubePlayer/YouTubePlayer";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

const Menu = () => {
    return (
        <div className="menu">
            <Sidebar />
            <div className="mainContent">
                <div className="createPost">
                    <input type="text" placeholder="Titre" />
                    <textarea placeholder="Description">
                        
                    </textarea>
                    <div className="createOptions">
                        <button>A photo</button>
                        <button>Video</button>
                        <button>Event</button>
                        <button>To write an article</button>
                    </div>
                </div>
                <PostList />
            </div>
            <div className="rightSection">
                <YouTubePlayer />
                <RightSidebar />
            </div>
        </div>
    );
}

export default Menu;