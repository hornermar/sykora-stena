"use client";
import { map } from "lodash";
import Image from "next/image";
import { getElementImage } from "../utils/getElementImages";

type ExampleGridProps = {
    grid: string[][];
    size: number;
    displayName?: boolean;
};

export const ExampleGrid = ({ grid, size, displayName }: ExampleGridProps) => {
    return (
        <div>
            {map(grid, (row, y) => (
                <div
                    key={y}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
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
                                        // border:
                                        //     cell === "F"
                                        //         ? "2px solid rgb(241, 79, 77)"
                                        //         : "none",
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
                                    <span>{cell !== "0" ? cell : " "}</span>
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};
