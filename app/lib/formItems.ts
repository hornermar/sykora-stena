import { Rule } from "../types/Rule";

export const rulesItems: Rule[] = [
    {
        text: "Elementy\u00A0navazují\u00A0barvami, elementy navazují tvary",
        code: 0,
        colorContinue: true,
        shapeContinue: true,
        example: [["1r", "1z", "3b"]],
    },
    {
        text: "Elementy\u00A0navazují\u00A0barvami, elementy nenavazují tvary",
        code: 1,
        colorContinue: true,
        shapeContinue: false,
        example: [["2z", "4d", "3z"]],
    },
    {
        text: "Elementy\u00A0nenavazují\u00A0barvami, elementy navazují tvary",
        code: 2,
        colorContinue: false,
        shapeContinue: true,
        example: [["3y", "4z", "1d"]],
    },
    {
        text: "Elementy\u00A0nenavazují\u00A0barvami, elementy nenavazují tvary",
        code: 3,
        colorContinue: false,
        shapeContinue: false,
        example: [["1d", "2y", "2y"]],
    },
];
