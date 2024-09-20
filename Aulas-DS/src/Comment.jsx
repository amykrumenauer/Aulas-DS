// Componente UserInfo
function UserInfo({ user }) {
    return (
        <div className="UserInfo">
            <Avatar user={user} />
            <div className="UserInfo-name">
                {user.name}
            </div>
        </div>
    );
}

// Componente Comment
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

