import { map } from "lodash";
import { elementItems } from "../lib/formItems";

type GridProps = {
 grid: string[][];
 setGrid: React.Dispatch<React.SetStateAction<string[][]>>;
};

export const Grid = ({ grid, setGrid }: GridProps) => {
 return (
  <table
   style={{
    margin: "35px",
    borderCollapse: "collapse",
    border: "1px solid black",
    fontSize: "14px",
   }}
  >
   <tbody>
    {map(grid, (row, y) => (
     <tr key={y} style={{ height: "50px" }}>
      {map(row, (cell: string, x) => (
       <td
        key={`${x}${y}`}
        style={{
         border: "1px solid",
         width: "50px",
        }}
       >
        {x}, {y}
        <br />
        <span style={{ fontWeight: "bold", color: "aqua" }}>{cell}</span>
        <select
         onChange={(e) =>
          setGrid((prev) => {
           const grid: any = [...prev];
           grid[y][x] = e.target.value;
           return grid;
          })
         }
         style={{
          width: "100%",
          height: "100%",
          fontSize: "12px",
         }}
        >
         <option value="0">0</option>
         {map(elementItems, (item) => (
          <option
           key={`${item.colorDensity}${item.letter}`}
           value={`${item.colorDensity}${item.letter}`}
          >
           {item.colorDensity}
           {item.letter}
          </option>
         ))}
         <option value="+">+</option>
         <option value="-">-</option>
        </select>
       </td>
      ))}
     </tr>
    ))}
   </tbody>
  </table>
 );
};
