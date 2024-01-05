import { Stack, Typography } from "@mui/material";

export type SectionProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    letter?: string;
    title?: string;
    color?: string;
};

export const Section = ({
    children,
    backgroundColor,
    letter,
    title,
    color,
}: SectionProps) => {
    return (
        <section
            style={{
                backgroundColor: backgroundColor ?? "unset",
                color: color ?? "black",
            }}
        >
            <Stack spacing={4} sx={{ padding: "60px 14px 50px 14px" }}>
                {letter && (
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ padding: "0 16px", margin: "0px" }}
                    >
                        {letter}
                    </Typography>
                )}

                {title && (
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ padding: "0 16px", marginTop: "0px !important" }}
                    >
                        {title}
                    </Typography>
                )}

                {children}
            </Stack>
        </section>
    );
};
