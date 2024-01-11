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
                    outline: "2px solid rgb(184, 231, 254)",
                    zIndex: 10,
                },
            }}
        >
            {map(grid[continues], (g, i) => {
                const isLast =
                    Number(i) === Object.keys(grid[continues]).length - 1;
                return (
                    <Structure
                        grid={g}
                        cellType="image"
                        sx={{ marginRight: !isLast ? "15px" : "0px" }}
                        key={i}
                    />
                );
            })}
        </Stack>
    );
};
