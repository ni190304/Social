import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from 'scenes/navbar';
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import UserWidget from 'scenes/widgets/UserWidget';
import AdvertWidget from '../widgets/AdvertWidget';
import FriendListWidget from '../widgets/FriendListWidget';

const HomePage = () => {

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { _id, picturePath } = useSelector((state) => state.user);


    return <Box>
        <Navbar />
        <Box
            width="100%"
            padding="2rem 6%"
            display={isNonMobileScreens ? "flex" : "block"}
            gap="1.5rem"
            justifyContent="start"
        >
            <Box flexBasis={isNonMobileScreens ? "26%" : undefined} >
                <UserWidget userId={_id} picturePath={picturePath} />
            </Box>
            <Box
                flexBasis={isNonMobileScreens ? "42%" : undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
            >
                <MyPostWidget picturePath={picturePath} />
                <PostsWidget userId={_id} />
            </Box>

            {isNonMobileScreens && (
                <Box
                    flexBasis="26%"
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    <AdvertWidget />
                    <FriendListWidget userId={_id} />
                </Box>
            )}

        </Box>
    </Box>
};

export default HomePage;