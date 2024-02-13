import { Box } from "@mui/material";
import { primaryColor } from "../../Dashboard";

type ExampleDesctiptionProps = {
    value: string;
};

export const ExampleDescriptionLabel = ({ value }: ExampleDesctiptionProps) => {
    return (
        <Box
            sx={{
                fontSize: "16px",
                fontWeight: "400",
                backgroundColor: primaryColor,
                // color: "white",
                padding: "5px 10px",
                display: "inline",
            }}
        >
            {value}
        </Box>
    );
};
