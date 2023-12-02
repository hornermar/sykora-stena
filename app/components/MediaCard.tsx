import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)((color) => ({
    boxShadow: "none",
    borderRadius: "15px",
    backgroundColor: color.color,
    fontSize: "20px",
    padding: "8px 4px",
}));

export default function MediaCard({
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
                <Typography gutterBottom variant="h5" component="div">
                    {heading}
                </Typography>

                {children}
            </CardContent>

            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </StyledCard>
    );
}
