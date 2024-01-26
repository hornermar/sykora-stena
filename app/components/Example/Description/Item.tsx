import { Box } from "@mui/material";

type ExampleDesctiptionProps = {
    label: string;
    value: string;
    isInLine?: boolean;
};

export const ExampleDescriptionItem = ({
    label,
    value,
    isInLine,
}: ExampleDesctiptionProps) => {
    return (
        <Box
            sx={{
                margin: "0 0 15px 0",
                label: {
                    fontSize: "14px",
                    fontWeight: "400",
                    marginBottom: "5px",
                    marginRight: "5px",
                    display: isInLine ? "inline" : "block",
                },
                span: {
                    fontSize: "16px",
                    fontWeight: "400",
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px 10px",
                },
            }}
        >
            <label>{label}</label>
            <span>{value}</span>
        </Box>
    );
};
