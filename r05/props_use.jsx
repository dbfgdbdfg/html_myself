function Profile(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.introduction}</p>
        <p>조회수: {props.viewCount}</p>
      </div>
    );
  }
  



function App(props){
    return(
        <Profile
            name="소플"
            introduction="안녕"
            viewCount={1500}
            />
    );
}