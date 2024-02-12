import { Typography } from "@mui/material";
import { Collapse } from "../common/Collapse";
import { Card } from "../common/Card";
import { Structure } from "../Structure/Structure";
import { GridSwitch } from "../common/Switch";
import { Stack } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { getElements } from "@/app/utils/getElements";
import { getRandomCoefficient } from "@/app/utils/getRandomCoefficient";
import { getRandomRule } from "@/app/utils/getRandomRule";
import { some } from "lodash";

type FrontPageImageProps = {
    emptyGrid: string[][];
};

export const FrontPageImage = ({ emptyGrid }: FrontPageImageProps) => {
    const [displayEmptyGrid, setDisplayEmptyGrid] = useState(false);
    const [grid, setGrid] = useState(emptyGrid);
    const [form, setForm] = useState({
        coefficient: 0.75,
        rule: 0,
    });

    const reloadInputs = useCallback(() => {
        setForm({
            coefficient: getRandomCoefficient(),
            rule: getRandomRule(),
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            reloadInputs();
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setGrid(getElements(form.rule, form.coefficient, emptyGrid));
    }, [form, emptyGrid]);

    return (
        <Card>
            <Structure
                grid={displayEmptyGrid ? emptyGrid : grid}
                cellType={displayEmptyGrid ? "text" : "image"}
            />

            <Collapse expandable={false} sx={{ paddingTop: "10px" }}>
                <Stack flexDirection="row" alignItems="center">
                    <Typography>
                        Koeficient:&nbsp;
                        <span
                            style={{
                                display: "inline-block",
                                width: "40px",
                            }}
                        >
                            {form.coefficient.toLocaleString("cs-CZ")}&nbsp;
                        </span>
                        Pravidlo:&nbsp;<span>{form.rule}</span>
                    </Typography>

                    <GridSwitch
                        sx={{ marginLeft: "20px" }}
                        checked={!displayEmptyGrid}
                        onChange={() => setDisplayEmptyGrid((prev) => !prev)}
                    />
                    {/* <IconButton
                        color="inherit"
                        onClick={() => reloadInputs()}
                        sx={{ backgroundColor: "white !important" }}
                    >
                        <Image
                            src={rotateIcon}
                            width={20}
                            height={20}
                            alt={"arrow left icon"}
                        />
                    </IconButton> */}
                </Stack>
            </Collapse>
        </Card>
    );
};
