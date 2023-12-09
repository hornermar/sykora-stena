import { map } from "lodash";
import { rulesItems } from "../lib/formItems";
import { FormValues } from "../types/FormValues";
import { getElements } from "../utils/getElements";

type FormProps = {
    form: FormValues;
    setForm: React.Dispatch<React.SetStateAction<FormValues>>;
    grid: string[][];
    setGrid: React.Dispatch<React.SetStateAction<string[][]>>;
    setIsGenerated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Form = ({
    form,
    setForm,
    grid,
    setGrid,
    setIsGenerated,
}: FormProps) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("grid: ", grid);

        const filledGrid = getElements(form.rule, form.coefficient, grid);
        setIsGenerated(true);
        setGrid(filledGrid);
    };

    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
            }}
        >
            <label>Rows</label>
            <input
                type="number"
                value={form.structure.rows}
                onChange={(e) =>
                    setForm((prev) => ({
                        ...prev,
                        structure: {
                            ...prev.structure,
                            rows: parseInt(e.target.value),
                        },
                    }))
                }
            />
            <label>Columns</label>
            <input
                type="number"
                value={form.structure.columns}
                onChange={(e) =>
                    setForm((prev) => ({
                        ...prev,
                        structure: {
                            ...prev.structure,
                            columns: parseInt(e.target.value),
                        },
                    }))
                }
            />
            <label>Coefficient</label>
            <input
                type="number"
                value={form.coefficient}
                onChange={(e) => {
                    setForm((prev) => ({
                        ...prev,
                        coefficient: parseFloat(e.target.value),
                    }));
                }}
                step="0.1"
                min="0"
                max="4"
            />
            <label>Rule</label>

            <select
                value={form.rule}
                onChange={(e) =>
                    setForm((prev) => ({
                        ...prev,
                        rule: parseInt(e.target.value),
                    }))
                }
            >
                {map(rulesItems, (item) => (
                    <option key={item.code} value={item.code}>
                        {item.code}: {item.text}
                    </option>
                ))}
            </select>
            <button onClick={(e) => handleSubmit(e)}>Vygeneruj</button>
            <button onClick={() => setIsGenerated(false)}>Reset</button>
        </form>
    );
};
