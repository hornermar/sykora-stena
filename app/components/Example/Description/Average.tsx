import { DensityDescription } from "@/app/types/Density";
import { first, map, size } from "lodash";
import { ExampleDescriptionLabel } from "./Label";

type ExampleDescriptionAverageProps = {
    cellContent: string;
    coefficient: number;
    description: DensityDescription;
};

export const ExampleDescriptionAverage = ({
    cellContent,
    coefficient,
    description,
}: ExampleDescriptionAverageProps) => {
    const neighboursNames = map(description.neighbours, "name");

    const neighboursGroup = map(neighboursNames, (n) =>
        Number(n.slice(0, 1))
    ).filter(Boolean);

    return (
        <>
            <ExampleDescriptionLabel
                value={`${
                    size(neighboursGroup) === 1
                        ? first(neighboursGroup)?.toLocaleString("cs-CZ")
                        : `(${neighboursGroup.join(" + ")})`
                } : ${size(
                    neighboursGroup
                )}  = ${description.neighboursAverage.toLocaleString("cs-CZ")}`}
            />

            {(cellContent === "+" || cellContent === "-") && (
                <>
                    <p>
                        V případě, že se v buňce nachází + nebo -, přičte nebo
                        odečte od průměru předem daný koeficient. Zde je
                        znaménko {cellContent} , od průměru je proto potřeba{" "}
                        {cellContent === "+" ? "přičíst" : "odečíst"} koeficient
                        (zde {coefficient.toLocaleString("cs-CZ")})
                    </p>

                    <ExampleDescriptionLabel
                        value={`${description.neighboursAverage.toLocaleString(
                            "cs-CZ"
                        )} ${cellContent} ${coefficient.toLocaleString(
                            "cs-CZ"
                        )} = ${description.unRoundedResult.toLocaleString(
                            "cs-CZ"
                        )}`}
                    />
                </>
            )}
        </>
    );
};
