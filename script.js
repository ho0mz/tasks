//1
const concatenateStrings = (str1, str2) => {
    return (str1 + str2).replace(/s+/g, '');
};

//2
const getStringLength = (str) => {
    return str.length;
};

//3
const getStringFromTemplate = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
};

//4
const getChar = (str, index) => {
    return str.charAt(index - 1);
}

//5
const removeFirstOccurrences = (str, substr) => {
    return str.replace(substr, '');
};

//6
const getRectangleString = (width, height) => {
    const topBottom = '*'.repeat(width) + '\n';
    const middle = '*' + ' '.repeat(width - 2) + '*\n';
    if (height === 1) {
        return topBottom.trim();
    }
    return topBottom + middle.repeat(height - 2) + topBottom.trim();
};

