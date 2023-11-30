"use client";
import { useEffect, useState } from "react";
import { FormValues } from "../types/FormValues";
import { Form } from "./Form";
import { Grid } from "./Grid";

const defaultForm: FormValues = {
    structure: {
        rows: 5,
        columns: 5,
    },
    coefficient: 0.75,
    rule: 2,
};

export default function Dashboard() {
    const [form, setForm] = useState<FormValues>(defaultForm);
    const [grid, setGrid] = useState<string[][]>([]);

    const defineGrid = () => {
        const emptyGrrid: any = [];
        for (let iy = 0; iy < form.structure.rows; iy++) {
            const row = [];
            for (let ix = 0; ix < form.structure.columns; ix++) {
                row.push("0");
            }
            emptyGrrid.push(row);
        }
        setGrid(emptyGrrid);
    };

    useEffect(() => {
        defineGrid();
    }, []);

    useEffect(() => {
        defineGrid();
    }, [form.structure.rows, form.structure.columns]);

    return (
        <div style={{ display: "flex", width: "60%", margin: "50px auto" }}>
            <Grid grid={grid} setGrid={setGrid} />
            <Form form={form} setForm={setForm} grid={grid} />
        </div>
    );
}
