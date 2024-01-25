"use client";
import { rulesItems } from "@/app/lib/formItems";
import { map } from "lodash";
import { Rule } from "../../types/Rule";
import { Card } from "../Card";
import { RuleExample } from "./RuleExample";

export const ArtistInputsRule = () => {
    return (
        <>
            <Card heading="4. Pravidlo" color="white">
                <p>
                    Dále je třeba zvolit jedno ze čtyř pravidel <b>V</b>, podle
                    kterého budou vypočítané elementy zaujímat vzájemnou polohu.
                </p>
            </Card>

            <Card color="white">
                {map(rulesItems, (rule: Rule) => (
                    <RuleExample rule={rule} key={rule.code} />
                ))}
            </Card>
        </>
    );
};
