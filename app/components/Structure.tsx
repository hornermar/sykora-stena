import { Stack, Switch } from "@mui/material";
import { map } from "lodash";
import Image from "next/image";
import { useState } from "react";
import { getElementImage } from "../utils/getElementImages";
import { CellSelect } from "./CellSelect";

export type StructureProps = {
    grid: string[][];
    size: number;
    cellType?: "select" | "image" | "text";
    onCellChange?: any;
    displaySwitch?: boolean;
    backgroundColor?: string;
};

export const Structure = ({
    grid,
    size,
    onCellChange,
    cellType,
    displaySwitch,
    backgroundColor,
}: StructureProps) => {
    const [type, setType] = useState(cellType);

    const handleTypeChange = () => {
        setType((prev) => (prev === "image" ? "text" : "image"));
    };

    return (
        <Stack
            flexDirection="column"
            width="100%"
            alignItems="center"
            sx={{ margin: "0 auto" }}
        >
            {map(grid, (row, y) => (
                <div
                    key={y}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: `${size}px`,
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
                                width: `${size}px`,
                                height: `${size}px`,
                                backgroundColor: backgroundColor,

                                border:
                                    type === "text" ||
                                    cell === "+" ||
                                    cell === "-" ||
                                    cell === "0"
                                        ? "1px solid black"
                                        : "unset",
                            }}
                        >
                            {type === "text" && (
                                <span>
                                    <b>{cell !== "0" && cell}</b>
                                </span>
                            )}

                            {type === "image" &&
                                (cell !== "+" && cell !== "-" ? (
                                    <Image
                                        src={getElementImage(cell)}
                                        width={size}
                                        height={size}
                                        alt={`element ${cell}`}
                                        className={`element-${x}${y}`}
                                    />
                                ) : (
                                    <span>
                                        <b>{cell}</b>
                                    </span>
                                ))}

                            {type === "select" && onCellChange && (
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
            {type !== "select" && displaySwitch && (
                <Switch
                    checked={type === "image"}
                    onChange={handleTypeChange}
                    sx={{ alignSelf: "center" }}
                />
            )}
        </Stack>
    );
};
