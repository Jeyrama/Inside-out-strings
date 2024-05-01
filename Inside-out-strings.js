/*
You are given a string of words (x), 
for each word within the string you need to turn the word 'inside out'. 
By this I mean the internal letters will move out, 
and the external letters move toward the centre.

If the word is even length, all letters will move. 
If the length is odd, you are expected to leave 
the 'middle' letter of the word where it is.

An example should clarify:
  'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/


// Solution

const insideOut = (() => {
  const strrev = str => str.split('').reverse().join('');
  const turnout = str => {
    let n = str.length >> 1;
    let [_, a, b, c] = str.match(RegExp(`(.{${n}})(.?)(.{${n}})`));
    return strrev(a) + b + strrev(c);
  }
  return str => str.split(' ').map(turnout).join(' ');
})();

// or

const insideOutArray = (str) => {  
  return str.split(' ').map(x => {    
    let left = x.substring(0, Math.floor(x.length / 2)).split('').reverse().join('')
    let right = x.substring(Math.ceil(x.length / 2)).split('').reverse().join('')
    let middle = x[Math.floor(x.length / 2)]    
    return x.length % 2 ? left + middle + right : left + right
  }).join(' ')
}