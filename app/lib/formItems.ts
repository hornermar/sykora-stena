import { Rule } from "../types/Rule";

export const rulesItems: Rule[] = [
    {
        text: "Elementy\u00A0navazují\u00A0barvami, elementy\u00A0navazují\u00A0tvary",
        code: 0,
        colorContinue: true,
        shapeContinue: true,
        example: [["1r", "1z"]],
    },
    {
        text: "Elementy\u00A0navazují\u00A0barvami, elementy\u00A0nenavazují\u00A0tvary",
        code: 1,
        colorContinue: true,
        shapeContinue: false,
        example: [["2z", "4d"]],
    },
    {
        text: "Elementy\u00A0nenavazují\u00A0barvami, elementy\u00A0navazují\u00A0tvary",
        code: 2,
        colorContinue: false,
        shapeContinue: true,
        example: [["3y", "4z"]],
    },
    {
        text: "Elementy\u00A0nenavazují\u00A0barvami, elementy\u00A0nenavazují\u00A0tvary",
        code: 3,
        colorContinue: false,
        shapeContinue: false,
        example: [["1d", "2y"]],
    },
];
