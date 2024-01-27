"use client";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";
import { ArtistInputsCoefficient } from "./Coefficient";
import { ArtistInputsDiagram } from "./Diagram";
import { ArtistInputsElements } from "./Elements";
import { ArtistInputsRule } from "./Rule";

type ArtistInputProps = {
    grid: string[][];
    color: string;
};

export const ArtistInputs = ({ grid, color }: ArtistInputProps) => {
    return (
        <>
            <Card color={color}>
                <SectionTitle letter="A." title="Vstupy umělce" />
                <p
                    style={{
                        marginTop: "70px",
                        marginBottom: 0,
                    }}
                >
                    Ještě před spuštěním výpočtu, který provedl algoritmus,
                    musel Zdeněk Sýkora nastavit 4&nbsp;parametry. Na těch
                    závisela výsledná podoba obrazu.
                </p>
            </Card>
            <ArtistInputsElements />

            <ArtistInputsDiagram grid={grid} />
            <ArtistInputsCoefficient color={color} />
            <ArtistInputsRule color={color} />
        </>
    );
};
