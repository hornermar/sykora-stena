import { Stack, SxProps } from "@mui/material";
import { map } from "lodash";
import Image from "next/image";
import { getElementImage } from "../utils/getElementImages";

type ExampleGridProps = {
    grid: string[][];
    size: number;
    displayName?: boolean;
    sx?: SxProps;
    activeCell?: { x: number; y: number };
};

export const ExampleGrid = ({
    grid,
    size,
    displayName,
    sx,
    activeCell,
}: ExampleGridProps) => {
    return (
        <>
            {map(grid, (row, y) => (
                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    key={y}
                    sx={sx}
                >
                    {map(row, (cell: string, x) => {
                        const isCellActive =
                            activeCell?.x === x && activeCell?.y === y;
                        return (
                            <div
                                key={`${x}${y}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        height: `${size}px`,
                                        marginBottom: !displayName ? "20px" : 0,
                                        outline: isCellActive
                                            ? "4px solid rgb(224, 217, 211)"
                                            : "initial",
                                    }}
                                >
                                    <Image
                                        src={getElementImage(cell)}
                                        width={size}
                                        height={size}
                                        alt={`element ${cell}`}
                                    />
                                </div>

                                {displayName && (
                                    <span style={{ marginBottom: "15px" }}>
                                        {cell !== "0" ? cell : " "}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </Stack>
            ))}
        </>
    );
};
