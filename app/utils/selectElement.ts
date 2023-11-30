import { first, size } from "lodash";
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
            return first(elementsBasedOnColor);
        } else {
            // else return a random element based on color
            return getRandomItem(elementsBasedOnColor);
        }
    } else if (size(elementsBasedOnShape) > 0) {
        // if there are elements based on shape
        if (size(elementsBasedOnShape) === 1) {
            // if there is only one element based on shape
            return first(elementsBasedOnShape);
        } else {
            // else return a random element based on shape
            return getRandomItem(elementsBasedOnShape);
        }
    } else {
        // else return a random element with selected density
        return getRandomItem(options);
    }
};
