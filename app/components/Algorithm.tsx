"use client";
import { useEffect, useState } from "react";
import { FormValues } from "../types/FormValues";
import { getEmptyGrid } from "../utils/getEmptyGrid";
import { Form } from "./Form";
import { Grid } from "./Grid";

const defaultForm: FormValues = {
    structure: {
        rows: 15,
        columns: 8,
    },
    coefficient: 0.75,
    rule: 2,
};

export function Algorithm() {
    const [form, setForm] = useState<FormValues>(defaultForm);
    const [grid, setGrid] = useState<string[][]>([]);

    const [isGenerated, setIsGenerated] = useState<boolean>(false);

    const { rows, columns } = form.structure;

    const defineGrid = () => {
        const emptyGrrid = getEmptyGrid(rows, columns);
        setGrid(emptyGrrid);
        setIsGenerated(false);
    };

    useEffect(() => {
        defineGrid();
    }, []);

    useEffect(() => {
        defineGrid();
    }, [rows, columns]);

    useEffect(() => {
        !isGenerated && defineGrid();
    }, [isGenerated]);

    return (
        <div
            style={{ display: "flex", flexDirection: "column", margin: "20px" }}
        >
            <Form
                form={form}
                setForm={setForm}
                grid={grid}
                setGrid={setGrid}
                setIsGenerated={setIsGenerated}
            />
            <Grid grid={grid} setGrid={setGrid} isGenerated={isGenerated} />
        </div>
    );
}
