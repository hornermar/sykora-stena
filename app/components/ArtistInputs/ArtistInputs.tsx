"use client";
import { Card } from "../common/Card";
import { SectionTitle } from "../common/SectionTitle";
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
                    Před spuštěním výpočtu nastavil Zdeněk Sýkora 4 parametry.
                    Zásadně na nich závisela výsledná podoba obrazu.
                </p>
                <p>
                    Vztahy v obraze jsou ovlivněny výběrem elementů a jejich
                    rozmístěním v diagramu. Dále pak koeficientem
                    světlosti/tmavosti a pravidlem, jak na sebe elementy budou
                    navazovat.
                </p>
            </Card>
            <ArtistInputsElements />

            <ArtistInputsDiagram grid={grid} />
            <ArtistInputsCoefficient color={color} />
            <ArtistInputsRule color={color} />
        </>
    );
};
