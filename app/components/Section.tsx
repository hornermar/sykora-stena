import { Stack, Typography } from "@mui/material";

export type SectionProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    title?: string;
};

export const Section = ({ children, backgroundColor, title }: SectionProps) => {
    return (
        <section style={{ backgroundColor: backgroundColor ?? "unset" }}>
            <Stack spacing={4} sx={{ padding: "60px 10px 50px 10px" }}>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ padding: "0 16px" }}
                >
                    {title}
                </Typography>
                {children}
            </Stack>
        </section>
    );
};
