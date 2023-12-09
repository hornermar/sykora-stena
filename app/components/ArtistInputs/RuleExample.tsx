import { Stack } from "@mui/material";
import { map } from "lodash";
import { Structure } from "../Structure";

type RuleExampleProps = {
    continues: "color" | "shape";
};

export const RuleExample = ({ continues }: RuleExampleProps) => {
    const grid = {
        color: {
            0: [["1r", "1z"]],
            1: [["2z", "4d"]],
            2: [["4y", "3y"]],
        },
        shape: {
            0: [["3y", "1z"]],
            1: [["3y", "4z"]],
            2: [["1d", "3y"]],
        },
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
                ".element-00": {
                    border: "2px solid rgb(241, 79, 77)",
                },
            }}
        >
            {map(grid[continues], (g) => (
                <Structure size={45} grid={g} cellType="image" />
            ))}
        </Stack>
    );
};
