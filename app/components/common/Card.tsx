import { Card as MuiCard, Stack, SxProps } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledCard = styled(MuiCard)((props) => ({
    boxShadow: "none",
    borderBottom: "2px solid black",
    backgroundColor: props.color,
    fontSize: "16px",
    borderRadius: "0",
    width: "100%",
}));

export function Card({
    heading,
    color,
    children,
    button,
    sx,
}: {
    heading?: string;
    color?: string;
    children?: React.ReactNode;
    button?: React.ReactNode;
    sx?: SxProps;
}) {
    return (
        <>
            <StyledCard color={color} sx={sx}>
                <CardContent
                    sx={{
                        padding: "20px !important",
                        borderRadius: "none",
                        height: "100%",
                    }}
                >
                    {(heading || button) && (
                        <Stack
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            {heading && (
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {heading}
                                </Typography>
                            )}

                            {button && (
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {button}
                                </Typography>
                            )}
                        </Stack>
                    )}

                    {children}
                </CardContent>
            </StyledCard>
        </>
    );
}
