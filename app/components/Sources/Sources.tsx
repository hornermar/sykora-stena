import { Card } from "../common/Card";
import { SectionTitle } from "../common/SectionTitle";

type SourcesProps = {};

export const Sources = ({}: SourcesProps) => {
    return (
        <>
            <Card>
                <SectionTitle letter="D." title="Zdroje" />
                <p>
                    Algoritmus popsal Zdeněk Sýkora v textu Můj systém z roku
                    1967. O pár let později, v roce 1970, jej pak spolu s
                    Jaroslavem Blažkem popisují v textu Computer-aided
                    multielement geometrical abstract paintings.
                </p>
                <p>
                    Příklad diagramu vychází rovněž z těchto zdrojů. V kapitole
                    A. je použita první část diagramu, v kapitole B. druhá. V
                    kapitole C. je pak kompletní.
                </p>

                <ol
                    style={{
                        fontSize: "14px",
                        paddingTop: "10px",
                    }}
                >
                    <li style={{ paddingBottom: "10px" }}>
                        SÝKORA, Zdeněk, KAPPEL Pavel. Zdeněk Sýkora 90. Prague:
                        Verzone, 2010. ISBN 978- 80-904546-1-3, s. 64-65
                    </li>
                    <li>
                        SÝKORA, Zdeněk, BLAŽEK Jaroslav. Computer aided Multi
                        element Geometrical Abstract Paintings. Leonardo. 1970,
                        roč. 3, s. 409-413
                    </li>
                </ol>
            </Card>
        </>
    );
};
