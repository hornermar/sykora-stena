import { Stack } from "@mui/material";

export type SectionProps = {
    children: React.ReactNode;
    id?: string;
};

export const Section = ({ children, id }: SectionProps) => {
    return (
        <section
            style={{
                backgroundColor: "black",
                color: "white",
            }}
            id={id}
        >
            <Stack>{children}</Stack>
        </section>
    );
};
