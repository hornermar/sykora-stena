"use client";
import { Stack, SxProps } from "@mui/material";
import { map } from "lodash";
import Image from "next/image";
import { getElementImage } from "../utils/getElementImages";

type ExampleGridProps = {
    grid: string[][];
    size: number;
    displayName?: boolean;
    sx?: SxProps;
};

export const ExampleGrid = ({
    grid,
    size,
    displayName,
    sx,
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
                        return (
                            <div
                                key={`${x}${y}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                {/* TODO remove background color and redo svg */}
                                <div
                                    style={{
                                        height: `${size}px`,
                                        backgroundColor:
                                            cell !== "0"
                                                ? "white"
                                                : "transparent",
                                        marginBottom: !displayName ? "20px" : 0,

                                        // outline:
                                        //     cell === "0"
                                        //         ? "none"
                                        //         : "2px solid rgb(184, 231, 254)",
                                        // zIndex: 10,
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
