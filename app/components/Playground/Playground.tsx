import { Card } from "../common/Card";
import { SectionTitle } from "../common/SectionTitle";
import { PlaygroundImage } from "./Image";

type PlaygroundProps = {
    defaultGrid: string[][];
    color: string;
};

export const Playground = ({ defaultGrid, color }: PlaygroundProps) => {
    return (
        <>
            <Card color={color}>
                <SectionTitle letter="C." title="Playground" />
                <p
                    style={{
                        marginTop: "70px",
                        marginBottom: 0,
                    }}
                >
                    A teď si můžete vyzkoušet, jak jednotlivé parametry
                    ovlivňují výsledný obraz.
                </p>
                <p>
                    Nenechte se ale zmást. V době, kdy Sýkora struktury
                    vytvářel, byly pouze omezené počítačové možnosti. Z počítače
                    dostal pouze seznam elementů a jejich umístění. Sám si pak
                    pomocí vlastnoručně vyrobených razítek obraz převedl do
                    výsledné podoby.
                </p>
            </Card>

            <PlaygroundImage defaultGrid={defaultGrid} />

            {/* <Card>
                <p>
                    V 70. letech od tvorby struktur Sýkora ustoupil a začal s
                    liniemi, protože mu to přišlo příliš omezující. V liniích je
                    totiž více náhody.
                </p>
            </Card> */}
        </>
    );
};
