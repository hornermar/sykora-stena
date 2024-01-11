import { Typography } from "@mui/material";

type SectionTitleProps = {
    letter?: string;
    title?: string;
    content?: any;
};

export const SectionTitle = ({ letter, title, content }: SectionTitleProps) => {
    return (
        <>
            {letter && (
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ padding: "0 2px", margin: "0px" }}
                >
                    {letter}
                </Typography>
            )}
            {title && (
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ padding: "0 2px", marginTop: "0px !important" }}
                >
                    {title}
                </Typography>
            )}

            {content && content}
        </>
    );
};
