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
    let word = ''
    
    // loop through str to find word
    for (let i = 0; i < str.length; i++) {
        const isChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (isChar.indexOf(str[i]) > -1 ) {
            word += str[i]
        } else {
            if (word.length > 0) {
                output += reversal(word, 0) + str[i]
                word = ''
            } else {
                output += str[i]
            }
        }
    }
    if (word.length > 1) {
        output += reversal(word,0)
    }
    return output
}

function reversal(str, start) {
    const input = str.split('')
    const exitNum = input.length % 2 === 0 ? (input.length/2) + 1 : Math.ceil(input.length)/2 - 1
    if ( start < exitNum) {
        const firstChar = input[start]
        const lastChar = input[input.length - 1 - start]
        input[start] = lastChar
        input[input.length - 1 - start] = firstChar
        return reversal(input.join(''), start + 1)
    } else {
        return input.join('')
    }
}

console.log(wordReverse('hello, my name is nick'))