import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    const token = useSelector((state) => state.token);

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        console.log(shuffledArray);
        return shuffledArray;
    };

    const getPosts = async () => {
        try {
            console.log("Started");
            const response = await fetch(`http://localhost:3001/posts/${userId}/feedposts`, {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const shuffled = shuffleArray(data);
            console.log(`Posts: ${shuffled}`);
            dispatch(setPosts({ posts: shuffled }));
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };


    const getUserPosts = async () => {
        try {
            console.log("Started");
            const response = await fetch(`http://localhost:3001/posts/${userId}/userposts`, {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const shuffled = shuffleArray(data);
            console.log(`Posts: ${shuffled}`);
            dispatch(setPosts({ posts: shuffled }));
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        if (isProfile) {
            console.log("getUserPosts");
            getUserPosts();
        } else {
            console.log("getPosts");
            getPosts();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (

        <>
            {posts.map(
                ({
                    _id,
                    userId,
                    firstName,
                    lastName,
                    description,
                    location,
                    picturePath,
                    userPicturePath,
                    likes,
                    comments,
                }) => (
                    <PostWidget
                        key={_id}
                        postId={_id}
                        postUserId={userId}
                        name={`${firstName} ${lastName}`}
                        description={description}
                        location={location}
                        picturePath={picturePath}
                        userPicturePath={userPicturePath}
                        likes={likes}
                        comments={comments}
                    />
                )
            )}
        </>
    );
};

export default PostsWidget;