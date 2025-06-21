import React from "react";

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    contentContainer:{
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    }
}

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div>
            <h1>컴포넌트 1트</h1>
            </div>
            <div style={styles.contentContainer}>
                <span className="nameText">{props.name}</span>
                <span className="commentText">안쓰고 해보기</span>
            </div>
        </div>

    );
}

export default Comment;
