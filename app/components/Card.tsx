import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledCard = styled(MuiCard)((color) => ({
    boxShadow: "none",
    borderRadius: "15px",
    backgroundColor: color.color,
    fontSize: "20px",
    padding: "8px 4px",
}));

export default function Card({
    heading,
    color,
    children,
}: {
    heading?: string;
    color?: string;
    children?: React.ReactNode;
}) {
    return (
        <StyledCard color={color}>
            <CardContent>
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
