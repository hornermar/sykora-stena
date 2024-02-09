import { Typography } from "@mui/material";
import { Collapse } from "../common/Collapse";
import { Card } from "../common/Card";
import { Structure } from "../Structure/Structure";
import { GridSwitch } from "../common/Switch";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import rotateIcon from "../../../public/rotate-solid.svg";
import { useEffect, useState } from "react";
import { getElements } from "@/app/utils/getElements";

type FrontPageImageProps = {
    emptyGrid: string[][];
    form: {
        coefficient: number;
        rule: number;
    };
    reloadInputs: () => void;
};

export const FrontPageImage = ({
    emptyGrid,
    form,
    reloadInputs,
}: FrontPageImageProps) => {
    const [displayEmptyGrid, setDisplayEmptyGrid] = useState(false);
    const [grid, setGrid] = useState(emptyGrid);

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
                    <IconButton
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
                    </IconButton>
                </Stack>
            </Collapse>
        </Card>
    );
};
