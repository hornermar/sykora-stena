import { Stack, Typography } from "@mui/material";
import { Rule } from "../../types/Rule";
import { Structure } from "../Structure";

type RuleExampleProps = {
    rule: Rule;
};

export const RuleExample = ({ rule }: RuleExampleProps) => {
    return (
        <Stack
            sx={{
                ".element-00": {
                    outline: "4px solid rgb(184, 231, 254)",
                    zIndex: 10,
                },
                marginBottom: "30px",
            }}
        >
            <Typography
                variant="h6"
                component="div"
                sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                }}
            >
                {rule.code}:
            </Typography>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    marginBottom: "30px",
                }}
            >
                {rule.text}
            </Typography>
            <Structure
                grid={rule.example}
                cellType="image"
                sx={{ width: "40%" }}
                key={rule.code}
            />
        </Stack>
    );
};
