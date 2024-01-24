import { Structure } from "./Structure";

type GridProps = {
    grid: string[][];
    setGrid: React.Dispatch<React.SetStateAction<string[][]>>;
    isGenerated: boolean;
};

export const Grid = ({ grid, setGrid, isGenerated }: GridProps) => {
    const handleCellChange = (e: any, x: number, y: number) => {
        console.log("e.target.value: ", e.target.value);
        console.log("x: ", x);
        console.log("y: ", y);

        setGrid((prev) => {
            const grid: any = [...prev];
            grid[y][x] = e.target.value;
            return grid;
        });
    };

    return (
        <Structure
            grid={grid}
            // onCellChange={handleCellChange}
            cellType={isGenerated ? "image" : "select"}
        />
    );
};
