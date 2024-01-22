import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledCard = styled(MuiCard)((props) => ({
    boxShadow: "none",
    border: "1px solid black",
    backgroundColor: props.color,
    fontSize: "16px",
}));

export function Card({
    heading,
    color,
    children,
    width,
}: {
    heading?: string;
    color?: string;
    children?: React.ReactNode;
    width?: string;
}) {
    return (
        <StyledCard color={color} sx={{ width: width ?? "100%" }}>
            <CardContent sx={{ padding: "20px" }}>
                {heading && (
                    <Typography gutterBottom variant="h5" component="div">
                        {heading}
                    </Typography>
                )}

                {children}
            </CardContent>
        </StyledCard>
    );
}
