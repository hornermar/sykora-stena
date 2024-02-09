import { Box } from "@mui/material";

type ExampleDesctiptionProps = {
    value: string;
};

export const ExampleDescriptionLabel = ({ value }: ExampleDesctiptionProps) => {
    return (
        <Box
            sx={{
                fontSize: "16px",
                fontWeight: "400",
                backgroundColor: "black",
                color: "white",
                padding: "5px 10px",
                display: "inline",
            }}
        >
            {value}
        </Box>
    );
};
