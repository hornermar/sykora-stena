import { Typography } from "@mui/material";
import { Collapse } from "../common/Collapse";
import { Card } from "../common/Card";
import { Structure } from "../Structure/Structure";
import { GridSwitch } from "../common/Switch";
import { Stack } from "@mui/material";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { getElements } from "@/app/utils/getElements";
import { getRandomCoefficient } from "@/app/utils/getRandomCoefficient";
import { getRandomRule } from "@/app/utils/getRandomRule";

type FrontPageImageProps = {
    emptyGrid: string[][];
};

export const FrontPageImage = memo(function FrontPageImage({
    emptyGrid,
}: FrontPageImageProps) {
    const [displayEmptyGrid, setDisplayEmptyGrid] = useState(false);
    const [grid, setGrid] = useState(emptyGrid);
    const [form, setForm] = useState({
        coefficient: 0.75,
        rule: 0,
    });
    const imageRef = useRef(null);
    let intervalId: ReturnType<typeof setTimeout> | null = null;

    const reloadInputs = useCallback(() => {
        setForm({
            coefficient: getRandomCoefficient(),
            rule: getRandomRule(),
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the card is in the viewport, start the interval
                if (entry.isIntersecting) {
                    intervalId = setInterval(() => {
                        reloadInputs();
                    }, 1000);
                } else {
                    // If the card is not in the viewport, clear the interval
                    if (intervalId) {
                        clearInterval(intervalId);
                    }
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        // Cleanup function
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    useEffect(() => {
        setGrid(getElements(form.rule, form.coefficient, emptyGrid));
    }, [form, emptyGrid]);

    const toggleDisplayEmptyGrid = useCallback(
        () => setDisplayEmptyGrid((prev) => !prev),
        []
    );

    return (
        <Card>
            <div ref={imageRef}>
                <Structure
                    grid={displayEmptyGrid ? emptyGrid : grid}
                    cellType={displayEmptyGrid ? "text" : "image"}
                />
            </div>

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
                        onChange={toggleDisplayEmptyGrid}
                    />
                </Stack>
            </Collapse>
        </Card>
    );
});
