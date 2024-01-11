import { Stack } from "@mui/material";
import { map, size } from "lodash";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { getElementImage } from "../utils/getElementImages";
import { CellSelect } from "./CellSelect";

export type StructureProps = {
    grid: string[][];
    cellType?: "select" | "image" | "text";
    onCellChange?: any;
    displaySwitch?: boolean;
    sx?: CSSProperties;
};

export const Structure = ({
    grid,
    onCellChange,
    cellType,
    displaySwitch,
    sx,
}: StructureProps) => {
    const [type, setType] = useState(cellType ?? "image");
    const [cellSize, setCellSize] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    const handleTypeChange = () => {
        setType((prev) => (prev === "image" ? "text" : "image"));
    };

    const getCellSize = () => {
        if (!ref.current) return 0;

        const gridWidth = Math.max(...map(grid, (row) => size(row)));
        return ref.current.clientWidth / gridWidth;
    };

    useEffect(() => {
        const newCellSize = getCellSize();
        setCellSize(Math.floor(newCellSize));
    }, [ref.current, grid]);

    return (
        <Stack
            flexDirection="column"
            width="100%"
            alignItems="center"
            sx={{ margin: "0 auto", ...sx }}
            ref={ref}
        >
            {map(grid, (row, y) => (
                <div
                    key={y}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: `${cellSize}px`,
                    }}
                >
                    {map(row, (cell: string, x) => (
                        <div
                            key={`${x}${y}`}
                            className={`xy`}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: `${cellSize}px`,
                                height: `${cellSize}px`,
                                backgroundColor: "white",
                                border:
                                    cellType === "text" ||
                                    cell === "+" ||
                                    cell === "-" ||
                                    cell === "0"
                                        ? "1px solid black"
                                        : "unset",
                            }}
                        >
                            {cellType === "text" && (
                                <span>
                                    <b>{cell !== "0" && cell}</b>
                                </span>
                            )}

                            {cellType === "image" &&
                                (cell !== "+" && cell !== "-" ? (
                                    <Image
                                        src={getElementImage(cell)}
                                        width={cellSize}
                                        height={cellSize}
                                        alt={`element ${cell}`}
                                        className={`element-${x}${y}`}
                                    />
                                ) : (
                                    <span>
                                        <b>{cell}</b>
                                    </span>
                                ))}

                            {cellType === "select" && onCellChange && (
                                <CellSelect
                                    onCellChange={onCellChange}
                                    cell={grid[y][x]}
                                    x={x}
                                    y={y}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
            {/* {type !== "select" && displaySwitch && (
                <Stack sx={{ marginTop: "20px" }}>
                    <Switch
                        checked={type === "image"}
                        onChange={handleTypeChange}
                    />
                </Stack>
            )} */}
        </Stack>
    );
};
