/**
 * function used to convert JSON with errors into a single string with error messages
 * @param {string} validationError JSON containing the errors (expected format is "zod" library error format).
 * @return {string} concatenated error message string .
 */
export const formatErrorMessage = (validationError: string): string => {
    const objectError = JSON.parse(validationError);
    let message = '';
    for(let i = 0; objectError.length > i; i++){
        message += objectError[i].message + ';'
    }
    return message;
}