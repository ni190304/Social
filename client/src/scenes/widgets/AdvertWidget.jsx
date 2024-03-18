import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant='h5' fontWeight="500">
                    Sponsored
                </Typography>
                <Typography>
                    Create Add
                </Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="post"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
                src={`http://localhost:3001/assets/info4.jpeg`}
            />
            <FlexBetween pt="0.5rem">
                <Typography color={main}>
                    Nika Cosmetics
                </Typography>
                <Typography color={medium}>
                    nikacosmetics.com
                </Typography>
            </FlexBetween>

            <Typography color={medium} m="0.5rem 0">
            Your pathway to stunning beauty and made sure your skin is exfoliating skin and shining like light.

            </Typography>

        </WidgetWrapper>
    )
}

export default AdvertWidget;