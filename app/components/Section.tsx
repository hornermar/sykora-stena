import { Stack } from "@mui/material";

export const Section = ({
    children,
    backgroundColor,
}: {
    children: React.ReactNode;
    backgroundColor?: string;
}) => {
    return (
        <section style={{ backgroundColor: backgroundColor ?? "unset" }}>
            <Stack spacing={4} sx={{ padding: "60px 10px 50px 10px" }}>
                {children}
            </Stack>
        </section>
    );
};
