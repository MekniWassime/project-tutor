import { ValidationArguments } from 'class-validator';
const sizeErrorMessage = function (isMin = true) {
  return (validationArguments: ValidationArguments) => {
    if (isMin) {
      return `La taille minimale doit être de ${validationArguments.constraints[0]}`;
    } else {
      return `La taille maximale doit être de ${validationArguments.constraints[0]}`;
    }
  };
};

const positiveValueErrorMessage = function () {
  return () => {
    return `La valeur doit etre superieure a s0`;

  };
};
export const errorMessages = { sizeErrorMessage, positiveValueErrorMessage };