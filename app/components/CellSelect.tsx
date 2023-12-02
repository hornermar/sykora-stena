import { map } from "lodash";
import { elementList } from "../lib/elementList";

type CellSelectProps = {
    onCellChange: any;
    cell: string;
    x: number;
    y: number;
};

export const CellSelect = ({ onCellChange, cell, x, y }: CellSelectProps) => {
    console.log("cell: ", cell);
    console.log("x: ", x);
    console.log("y: ", y);
    return (
        <select
            onChange={(e) => onCellChange(e, x, y)}
            style={{
                width: "100%",
                fontSize: "8px",
                height: "30px",
            }}
        >
            <option value="0">0</option>
            {map(elementList, (item) => (
                <option
                    key={item.name}
                    value={item.name}
                    selected={cell === item.name}
                >
                    {item.name}
                </option>
            ))}
            <option value="+">+</option>
            <option value="-">-</option>
        </select>
    );
};
