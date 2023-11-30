export const elementItems = [
    { colorDensity: "1", letter: "b" },
    { colorDensity: "1", letter: "y" },
    { colorDensity: "1", letter: "i" },
    { colorDensity: "1", letter: "r" },
    { colorDensity: "1", letter: "d" },
    { colorDensity: "1", letter: "z" },
    // 2
    { colorDensity: "2", letter: "z" },
    { colorDensity: "2", letter: "y" },
    { colorDensity: "2", letter: "r" },
    { colorDensity: "2", letter: "b" },
    //3
    { colorDensity: "3", letter: "z" },
    { colorDensity: "3", letter: "b" },
    { colorDensity: "3", letter: "y" },
    { colorDensity: "3", letter: "r" },
    //4
    { colorDensity: "4", letter: "b" },
    { colorDensity: "4", letter: "y" },
    { colorDensity: "4", letter: "i" },
    { colorDensity: "4", letter: "r" },
    { colorDensity: "4", letter: "d" },
    { colorDensity: "4", letter: "z" },
];

export const rulesItems = [
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
        text: "nepokračuje barva, nepokračuje tvar",
        code: 3,
        colorContinue: false,
        shapeContinue: false,
    },
];
