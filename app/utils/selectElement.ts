import { size } from "lodash";
import { ElementType } from "../types/ElementType";

const getRandomItem = (array: ElementType[]) => {
    return array[Math.floor(Math.random() * array.length)];
};

export const selectElement = (
    elementsBasedOnColor: ElementType[],
    elementsBasedOnShape: ElementType[],
    options: ElementType[]
) => {
    if (size(elementsBasedOnShape) === 0 && size(elementsBasedOnColor) > 0) {
        // if there are no elements based on shape
        if (size(elementsBasedOnColor) === 1) {
            // if there is only one element based on color
            return {
                result: elementsBasedOnColor[0],
                reason: "neexistuje prvek, který odpovídá tvarem a zároveň jen jeden prvek, který odpovídá barvou, je zvolen ten",
                finalOptions: elementsBasedOnColor,
            };
        } else {
            // else return a random element based on color
            return {
                result: getRandomItem(elementsBasedOnColor),
                reason: "neexistuje prvek, který odpovídá tvarem a zároveň více prvků, které odpovídají barvou, je zvolen jeden z nich náhodně",
                finalOptions: elementsBasedOnColor,
            };
        }
    } else if (size(elementsBasedOnShape) > 0) {
        // if there are elements based on shape
        if (size(elementsBasedOnShape) === 1) {
            // if there is only one element based on shape
            return {
                result: elementsBasedOnShape[0],
                reason: "existuje pouze jeden prvek, který odpovídá barvou i tvarem, je zvolen ten",
                finalOptions: elementsBasedOnShape,
            };
        } else {
            // else return a random element based on shape
            return {
                result: getRandomItem(elementsBasedOnShape),
                reason: "existuje více prvků, které odpovídají barvou i tvarem, je vybrán náhodně jeden z nich",
                finalOptions: elementsBasedOnShape,
            };
        }
    } else {
        // else return a random element with selected density
        return {
            result: getRandomItem(options),
            reason: "neodpovídá žádný prvek, je vybrán náhodný prvek z dané skupiny",
            finalOptions: options,
        };
    }
};
