"use client";
import { ArtistInputsCoefficient } from "./Coefficient";
import { ArtistInputsDiagram } from "./Diagram";
import { ArtistInputsElements } from "./Elements";
import { ArtistInputsRule } from "./Rule";

type ArtistInputProps = {
    grid: string[][];
};

export const ArtistInputs = ({ grid }: ArtistInputProps) => {
    return (
        <>
            <ArtistInputsElements />

            <ArtistInputsDiagram grid={grid} />
            <ArtistInputsCoefficient />
            <ArtistInputsRule />
        </>
    );
};
