/**
 * @param {number} length - the length of the square
 * @param {number} width - the width of the square
 * @return {number} the area of the square
**/



function find_area_square(length, width){
    return length * width;
}


/**
 * @param {Array.<number>} numbers - an array of numbers
 * @return {number} the sum of all the numbers
**/
function sum_of_numbers(numbers){
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}


/**
 * @param {number} a - a number
 * @param {number} b - a number
 * @return {number} the smaller of the number
**/
function find_smaller_number(a, b){
    if(a < b){
        return a;
    }
    return b;
}


/**
 * @param {Array.<number>} numbers - an array of numbers
 * @return {number} the smallest number in the array
**/

// Mostlikely Does not handle all arrays correctly
function find_smallest_number(numbers){
    let smallest = new Boolean(false);
    let smallest_num = numbers[0];
    for(let i =0; i<numbers.length; i++){
        for(let j =0; j<numbers.length; j++){
            if(numbers[i]< numbers[j] ){
                smallest_num = numbers[i];
            }
        }
    }
    return smallest_num;
}




/**
 * @param {string} word - a random word
 * @param {number} length - the length of the abbreviation
 * @return {string} the first {length} number of letters of the word
**/

function abbreviate(word, length){
    return word.substring(0,length);
}


/**
 * @param {string} first_name - a first name
 * @param {string} last_name - a last name
 * @return {string} the full name, with last name first, separated by a comma
**/

function get_full_name(first_name, last_name){
    return first_name +" "+ last_name;
}

/**
 * ----------------
   ----------------
   DON'T CHANGE ANYTHING BELOW THIS LINE
   ----------------
   ----------------
 *
 **/

const commands = [
    'find_area_square(37, 29)',
    'sum_of_numbers([64, 34, 57, 49, 87, 9, 14])',
    'find_smaller_number(41, -13)',
    'find_smallest_number([30, 22, 63, 29, 4, 96])',
    'abbreviate("Medgar", 3)',
    'get_full_name("James", "Bond")'
];

for(const command of commands){
    console.log(`${command} = ${eval(command)}`);
}