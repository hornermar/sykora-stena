"use client";
import { Card } from "../Card";
import { SectionTitle } from "../SectionTitle";

type SourcesProps = {};

export const Sources = ({}: SourcesProps) => {
    return (
        <>
            <Card>
                <SectionTitle letter="E." title="Zdroje" />
                <ol
                    style={{
                        padding: "20px",
                        fontSize: "14px",
                    }}
                >
                    <li style={{ paddingBottom: "10px" }}>
                        SÝKORA, Zdeněk, KAPPEL Pavel. Zdeněk Sýkora 90. Prague:
                        Verzone, 2010. ISBN 978- 80-904546-1-3.
                    </li>
                    <li>
                        SÝKORA, Zdeněk, BLAŽEK Jaroslav. Computer aided Multi
                        element Geometrical Abstract Paintings. Leonardo. 1970,
                        roč. 3, s. 409
                    </li>
                </ol>
            </Card>
        </>
    );
};
