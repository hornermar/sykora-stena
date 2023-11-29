import { map } from "lodash";
import { rulesItems } from "../lib/formItems";
import { FormValues } from "../types/FormValues";
import { getElements } from "../utils/getElements";

type FormProps = {
 form: FormValues;
 setForm: React.Dispatch<React.SetStateAction<FormValues>>;
 grid: string[][];
};

export const Form = ({ form, setForm, grid }: FormProps) => {
 const handleSubmit = (e: any) => {
  e.preventDefault();
  console.log("grid: ", grid);

  getElements(form, grid);
  //setForm((prev) => ({ ...prev, grid: newGrid as any }));
 };

 return (
  <form style={{ display: "flex", flexDirection: "column" }}>
   <label>Rows</label>
   <input
    type="number"
    value={form.structure.rows}
    onChange={(e) =>
     setForm((prev) => ({
      ...prev,
      structure: { ...prev.structure, rows: parseInt(e.target.value) },
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
      structure: { ...prev.structure, columns: parseInt(e.target.value) },
     }))
    }
   />
   <label>Coefficient</label>
   <input
    type="number"
    value={form.coefficient}
    onChange={(e) => {
     console.log(e.target),
      setForm((prev) => ({
       ...prev,
       coefficient: parseInt(e.target.value),
      }));
    }}
    min="0"
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
     <option key={item.value} value={item.value}>
      {item.label}
     </option>
    ))}
   </select>
   <button onClick={(e) => handleSubmit(e)}>values</button>
  </form>
 );
};
