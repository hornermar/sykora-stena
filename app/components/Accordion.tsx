import {
    AccordionDetails,
    AccordionSummary,
    Accordion as MuiAccordion,
    styled,
} from "@mui/material";

const StyledAccordion = styled(MuiAccordion)((props) => ({
    "&.MuiPaper-root": {
        boxShadow: "none",
        borderRadius: "0",
        borderBottom: "1px solid #aab4be",
    },
    ".MuiButtonBase-root": {
        padding: "0",
        minHeight: "unset",
    },
    ".MuiAccordionSummary-content": {
        margin: "5px 0",
    },
    ".MuiAccordionDetails-root": {
        padding: "15px 0 10px 0",
    },
}));

type AccordionProps = {
    defaultExpanded?: boolean;
    summary: string;
    children: React.ReactNode;
};

export const Accordion = ({
    defaultExpanded,
    summary,
    children,
}: AccordionProps) => {
    return (
        <StyledAccordion defaultExpanded={defaultExpanded}>
            <AccordionSummary expandIcon={<span>&#x2b;</span>}>
                {summary}
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </StyledAccordion>
    );
};
