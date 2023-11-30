import { map } from "lodash";
import { rulesItems } from "../lib/formItems";
import { FormValues } from "../types/FormValues";
import { getElements } from "../utils/getElements";

type FormProps = {
    form: FormValues;
    setForm: React.Dispatch<React.SetStateAction<FormValues>>;
    grid: string[][];
    setGrid: React.Dispatch<React.SetStateAction<string[][]>>;
};

export const Form = ({ form, setForm, grid, setGrid }: FormProps) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("grid: ", grid);

        const newGrid = getElements(form, grid);
        setGrid(newGrid);
    };

    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                margin: "0 auto",
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
            <p>
                Lower values for c yield less change in color density; higher
                values yield greater change
            </p>
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
            {/* <p>
                We say that the <i>colors continue</i> if the color along a side
                of an element is the same as that along the adjoining border of
                the neighboring element.
            </p>
            <p>
                We say that the <i>shapes continue</i> at the side of an element
                if each half circle open to a side joins a half circle of a
                bordering element to form a complete circle or if two patterns
                join, neither of which is a half circle pen to a side
            </p> */}
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
            <button onClick={(e) => handleSubmit(e)}>values</button>
        </form>
    );
};
