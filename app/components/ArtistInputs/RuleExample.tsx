import { Stack, Typography } from "@mui/material";
import { Rule } from "../../types/Rule";
import { Structure } from "../Structure/Structure";

type RuleExampleProps = {
    rule: Rule;
    color: string;
};

export const RuleExample = ({ rule, color }: RuleExampleProps) => {
    return (
        <Stack>
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
            <Stack
                flexDirection="row"
                alignItems="center"
                sx={{ marginBottom: "30px" }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: "400",
                        fontSize: "16px",
                    }}
                >
                    {rule.text}
                </Typography>
            </Stack>

            <Structure
                grid={rule.example}
                cellType="image"
                sx={{ width: "60%" }}
                key={rule.code}
                activeNeighbours={[{ x: 1, y: 0 }]}
                color={color}
            />
        </Stack>
    );
};
