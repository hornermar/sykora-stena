import { first, map, size } from "lodash";
import { ExampleDescriptionLabel } from "./Label";

type ExampleDescriptionAverageProps = {
    cellContent: string;
    coefficient: number;
    description: {
        neighbours: string[];
        neighboursAverage: number;
        step: number;
        unRoundedResult: number;
    };
};

export const ExampleDescriptionAverage = ({
    cellContent,
    coefficient,
    description,
}: ExampleDescriptionAverageProps) => {
    const neighboursGroup = map(description.neighbours, (n) =>
        Number(n.slice(0, 1))
    ).filter(Boolean);

    return (
        <>
            <ExampleDescriptionLabel
                value={`${
                    size(neighboursGroup) === 1
                        ? first(neighboursGroup)
                        : `(${neighboursGroup.join(" + ")})`
                } : ${size(neighboursGroup)}  = ${
                    description.neighboursAverage
                }`}
            />

            {(cellContent === "+" || cellContent === "-") && (
                <>
                    <p>
                        V případě, že se v prvku nachází + nebo -, přičte nebo
                        odečte od průměru předem daný koeficient. Zde je
                        znaménko {cellContent} , od průměru je proto potřeba{" "}
                        {cellContent === "+" ? "přičíst" : "odečíst"} koeficient{" "}
                        {coefficient}
                    </p>

                    <ExampleDescriptionLabel
                        value={`${description.neighboursAverage} ${cellContent} ${coefficient} = ${description.unRoundedResult}`}
                    />
                </>
            )}
        </>
    );
};