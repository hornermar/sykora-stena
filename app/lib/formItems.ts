export const rulesItems: Rule[] = [
    {
        text: "Pokračuje barva, pokračuje tvar",
        code: 0,
        colorContinue: true,
        shapeContinue: true,
    },
    {
        text: "Pokračuje barva, nepokračuje tvar",
        code: 1,
        colorContinue: true,
        shapeContinue: false,
    },
    {
        text: "Nepokračuje barva, pokračuje tvar",
        code: 2,
        colorContinue: false,
        shapeContinue: true,
    },
    {
        text: "Nepokračuje barva, nepokračuje tvar",
        code: 3,
        colorContinue: false,
        shapeContinue: false,
    },
];
