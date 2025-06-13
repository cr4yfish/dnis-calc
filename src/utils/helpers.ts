export function formatNumberInDigitGroups(num: number, groupSize: number): string {
  // 1. Convert the number to a string
  const numStr = num.toString();

  // 2. Use a regular expression to insert dots every 4 digits from the right
  //    This regex looks for any 4 digits followed by another digit (positive lookahead)
  //    and replaces the 4 digits with themselves followed by a dot.
  //    We need to reverse the string, apply the regex, and then reverse it back
  //    to get the grouping from the right.

  const reversedStr = numStr.split('').reverse().join('');
  const formattedReversedStr = reversedStr.replace(/(\d{groupSize})(?=\d)/g, '$1.');
  const formattedStr = formattedReversedStr.split('').reverse().join('');

  return formattedStr;
}

export function formatBinary(str: string): string {
  // 1. Remove all non-binary characters
  const cleanedStr = str.replace(/[^01]/g, '');

  // 2. Use a regular expression to insert dots every 4 digits from the right
  const reversedStr = cleanedStr.split('').reverse().join('');
  const formattedReversedStr = reversedStr.replace(/(\d{4})(?=\d)/g, '$1.');
  const formattedStr = formattedReversedStr.split('').reverse().join('');

  return formattedStr;
}

/**
 * Group binary digits into 8-bit groups and format as an binary IP address.
 * @param str 
 */
export function formatBinaryAsIPAddress(str: string): string {
    // 1. Remove all non-binary characters
    const cleanedStr = str.replace(/[^01]/g, '');
    
    // 2. Use a regular expression to insert dots every 8 digits from the right
    const reversedStr = cleanedStr.split('').reverse().join('');
    const formattedReversedStr = reversedStr.replace(/(\d{8})(?=\d)/g, '$1.');
    const formattedStr = formattedReversedStr.split('').reverse().join('');
    
    return formattedStr;
}

export function formatHex(str: string): string {
  // 1. Remove all non-hexadecimal characters
  const cleanedStr = str.replace(/[^0-9A-Fa-f]/g, '');

  // 2. Use a regular expression to insert dots every 4 characters from the right
  const reversedStr = cleanedStr.split('').reverse().join('');
  const formattedReversedStr = reversedStr.replace(/(\w{4})(?=\w)/g, '$1.');
  const formattedStr = formattedReversedStr.split('').reverse().join('');

  return "0x" + formattedStr;
}

