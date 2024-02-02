"use client";
import { rulesItems } from "@/app/lib/formItems";
import { map } from "lodash";
import { Rule } from "../../types/Rule";
import { Card } from "../Card";
import { RuleExample } from "./RuleExample";

type ArtistInputsRuleProps = {
    color: string;
};

export const ArtistInputsRule = ({ color }: ArtistInputsRuleProps) => {
    return (
        <>
            <Card heading="4. Pravidlo" color="white">
                <p>
                    Dále je třeba zvolit jedno ze čtyř <b>pravidel</b>, podle
                    kterého budou vypočítané elementy zaujímat vzájemnou polohu.
                </p>
                <p>
                    Rozhoduje, jaké vztahy elementy navazují, zda se vzájemně
                    napojují, nebo se od sebe izolují (barvou, tvarem, nebo
                    obojím).
                </p>
            </Card>

            <Card color="white">
                {map(rulesItems, (rule: Rule) => (
                    <RuleExample rule={rule} key={rule.code} color={color} />
                ))}
            </Card>
        </>
    );
};
