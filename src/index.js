module.exports = function toReadable(number) {

  if (number === 0) return 'zero';

  let result = [];

  //return the largest integer less than or equal to a given number
  let hundreds = Math.floor(number / 100);

  if (hundreds > 0) {
    let hundredsSrt = (hundreds == 9) ? 'nine' : (hundreds == 8) ? 'eight' : (hundreds == 7) ? 'seven' :
      (hundreds == 6) ? 'six' : (hundreds == 5) ? 'five' : (hundreds == 4) ? 'four' :
        (hundreds == 3) ? 'three' : (hundreds == 2) ? 'two' : 'one';

    result.push(`${hundredsSrt} hundred`);
  };

  let dozens = number - hundreds * 100;
  let dozensNumber = Math.floor(dozens / 10);

  if (dozens > 19 || dozens < 10) {

      if (dozensNumber > 1) {
        let dozensStr = (dozensNumber == 9) ? 'ninety' : (dozensNumber == 8) ? 'eighty' : (dozensNumber == 7) ? 'seventy' :
        (dozensNumber == 6) ? 'sixty' : (dozensNumber == 5) ? 'fifty' : (dozensNumber == 4) ? 'forty' :
        (dozensNumber == 3) ? 'thirty' : 'twenty';
       result.push(dozensStr);
      }

      let digits = dozens - dozensNumber * 10;

      if (digits > 0) {
       let digitsStr = (digits == 9) ? 'nine' : (digits == 8) ? 'eight' : (digits == 7) ? 'seven' : (digits == 6) ? 'six' :
        (digits == 5) ? 'five' : (digits == 4) ? 'four' : (digits == 3) ? 'three' : (digits == 2) ? 'two' : 'one';
        result.push(digitsStr);
      }

  } else {
      let teensStr = (dozens == 19) ? 'nineteen' : (dozens == 18) ? 'eighteen' : (dozens == 17) ? 'seventeen' : (dozens == 16) ?
      'sixteen' : (dozens == 15) ? 'fifteen' : (dozens == 14) ? 'fourteen' : (dozens == 13) ? 'thirteen' : (dozens == 12) ?
      'twelve' : (dozens == 11) ? "eleven" : 'ten';
      result.push(teensStr);
  }

  let resultStr = result.join(' ');

  return resultStr;

}

