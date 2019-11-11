/*
Given a string, we would like to reverse the letters in 
each word while maintaining the original order of words, 
spaces and punctuation. Words are separated by spaces and 
punctuation marks, and there are no numbers. The words consist
of lower or upper case letters (so no hyphens), and the case of
letters should be preserved in the final answer.

For example, This IS a word-teSt,yo! should turn into sihT SI a dorw-tSet,oy!.

*/

function wordReverse(str) {
    let output = ''
    // temp storage for words
    let word = ''
    
    // loop through str to find words
    for (let i = 0; i < str.length; i++) {
        const isChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        // if char is a letter
        if (isChar.indexOf(str[i]) > -1 ) {
            // add to temp word
            word += str[i]
        } else {
            // it not a letter, and temp word has val
            if (word.length > 0) {
                // reverse temp word, add non-char to output
                output += reversal(word, 0) + str[i]
                // reset temp word
                word = ''
            } else {
                // if temp word has no length, just add non-char to output
                output += str[i]
            }
        }
    }
    // if anything is left in temp word, reverse it and append
    if (word.length > 1) {
        output += reversal(word,0)
    }
    // return final result
    return output
}

function reversal(str, start) {
    // take word to reverse and convert to array
    const input = str.split('')
    // define num to exit reversal strategy
    const exitNum = input.length % 2 === 0 ? (input.length/2) + 1 : Math.ceil(input.length)/2 - 1
    // if base case not satisfied
    if ( start < exitNum) {
        // swap first char with last char
        const firstChar = input[start]
        const lastChar = input[input.length - 1 - start]
        input[start] = lastChar
        input[input.length - 1 - start] = firstChar
        // recurse swapping characters
        return reversal(input.join(''), start + 1)
    } else {
        // return result
        return input.join('')
    }
}
