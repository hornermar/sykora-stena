import { Stack } from "@mui/material";

export type SectionProps = {
    children: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
    return (
        <section
            style={{
                backgroundColor: "black",
                color: "white",
            }}
        >
            <Stack>{children}</Stack>
        </section>
    );
};
