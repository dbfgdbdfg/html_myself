import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";


const Wrapper = styled.div`
    width:calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    
    :not(:last-child){
        margin-bottom: 16px;}
`;

function MainPage(props) {
    const {}=props;

    const navigate=useNavigate();

    return(
        <Wrapper>
            <Container>
                <Button
                title='글 작성하기'
                onClick={()=>{navigate("/post-write");
                }}
                />
            </Container>

            <Container>
                <PostList
                    posts={data}
                    onClickItem={(post) => {
                        navigate(`/post/${post.id}`);
                    }}
                />
            </Container>
            
        </Wrapper>
    );
}

export default MainPage;
