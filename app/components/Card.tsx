import { Card as MuiCard, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledCard = styled(MuiCard)((props) => ({
    boxShadow: "none",
    border: "1px solid black",
    backgroundColor: props.color,
    fontSize: "16px",
    borderRadius: "0",
}));

export function Card({
    heading,
    color,
    children,
    width,
    button,
}: {
    heading?: string;
    color?: string;
    children?: React.ReactNode;
    width?: string;
    button?: React.ReactNode;
}) {
    return (
        <StyledCard color={color} sx={{ width: width ?? "100%" }}>
            <CardContent sx={{ padding: "20px", borderRadius: "none" }}>
                <Stack flexDirection="row" justifyContent="space-between">
                    {heading && (
                        <Typography gutterBottom variant="h5" component="div">
                            {heading}
                        </Typography>
                    )}

                    {button && (
                        <Typography gutterBottom variant="h5" component="div">
                            {button}
                        </Typography>
                    )}
                </Stack>

                {children}
            </CardContent>
        </StyledCard>
    );
}
