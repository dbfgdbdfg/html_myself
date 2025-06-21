function Profile(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.introduction}</p>
        <p>조회수: {props.viewCount}</p>
      </div>
    );
  }
  
  export default Profile;
  