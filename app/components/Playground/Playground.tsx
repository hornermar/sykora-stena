"use client";
import { getElements } from "@/app/utils/getElements";
import { Slider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../Card";
import { Chip } from "../Chip";
import { Structure } from "../Structure";

const defaultGrid = [
    // 1
    ["-", "-", "-", "0", "3r", "1r", "+", "+", "0", "-", "-"],
    // 2
    ["-", "1r", "+", "+", "-", "-", "-", "4z", "+", "-", "2r"],
    // 3
    ["-", "+", "+", "4i", "-", "1i", "-", "0", "0", "0", "0"],
    // 4
    ["-", "+", "+", "+", "-", "-", "-", "3b", "+", "+", "0"],
    // 5
    ["1z", "0", "0", "0", "-", "1d", "-", "+", "+", "0", "-"],
    // 6
    ["-", "+", "+", "0", "-", "-", "1y", "+", "+", "+", "1d"],
    // 7
    ["-", "+", "4z", "+", "1r", "-", "-", "0", "+", "0", "-"],
    // 8
    ["0", "+", "+", "+", "0", "-", "-", "3b", "0", "-", "-"],
    // 9
    ["+", "+", "+", "1d", "0", "-", "-", "+", "+", "4r", "-"],
    // 10
    ["+", "0", "3b", "+", "0", "0", "1r", "+", "+", "0", "-"],
];

export const Playground = () => {
    const [form, setForm] = useState({ coefficient: 0.75, rule: 3 });
    const [grid, setGrid] = useState(defaultGrid);

    useEffect(() => {
        setGrid(getElements(form.rule, form.coefficient, defaultGrid));
    }, [form.coefficient, form.rule]);

    return (
        <>
            <Card color="#faeb48">
                <Structure grid={grid} cellType="image" />

                <Slider
                    value={form.coefficient}
                    min={0.01}
                    max={4}
                    step={0.5}
                    onChange={(e, newValue) =>
                        setForm((prev) => ({
                            ...prev,
                            coefficient: newValue as number,
                        }))
                    }
                    valueLabelDisplay="on"
                    sx={{ marginTop: "35px " }}
                />

                <Stack spacing={1} sx={{ margin: "10px 0 30px 0" }}>
                    <Chip
                        label="Barva pokračuje, tvar pokračuje"
                        onClick={() =>
                            setForm((prev) => ({
                                ...prev,
                                rule: 0,
                            }))
                        }
                    />

                    <Chip
                        label="Barva pokračuje, tvar nepokračuje"
                        onClick={() =>
                            setForm((prev) => ({
                                ...prev,
                                rule: 1,
                            }))
                        }
                    />

                    <Chip
                        label="Barva nepokračuje, tvar pokračuje"
                        onClick={() =>
                            setForm((prev) => ({
                                ...prev,
                                rule: 2,
                            }))
                        }
                    />

                    <Chip
                        label="Barva nepokračuje, tvar pokračuje"
                        onClick={() =>
                            setForm((prev) => ({
                                ...prev,
                                rule: 3,
                            }))
                        }
                    />
                </Stack>
            </Card>
        </>
    );
};
