
const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>Home</li>
                <li>Notifications</li>
                <li>Messages</li>
                <li>Thematiques</li>
                <ul>
                    <li>Sujet 1</li>
                    <li>Sujet 2</li>
                    <li>Sujet 3</li>
                    <li>Sujet 4</li>
                </ul>
            </ul>

        </div>
    );
}

export default SideBar;