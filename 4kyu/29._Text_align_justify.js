/**
Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:
Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Last line should not terminate in '\n'
'\n' is not included in the length of a line.
Gaps between words can't differ by more than one space.
Lines should end with a word not a space.
Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
Last line should not be justified, use only one space between words.
Lines with one word do not need gaps ('somelongword\n').
 */

function justify(text, width) {

    const lines = [];
    let currentLine = '';

    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (currentLine.length + words[i].length <= width) {
            currentLine += words[i] + ' ';
        } else {
            lines.push(currentLine.trim());
            currentLine = words[i] + ' ';
        }
    }

    if (currentLine) {
        lines.push(currentLine.trim());
    }

    for (let i = 0; i < lines.length - 1; i++) {
        lines[i] = justifyLine(lines[i], width) + '\n';
    }

    return lines.join('');
}

function justifyLine(line, width) {
    
    const words = line.split(' ');
    const spacesNeeded = width - line.length;
    const minSpace = Math.floor(spacesNeeded / (words.length - 1));
    let extraSpaces = spacesNeeded - (minSpace * (words.length - 1));

    for (let i = 0; i < words.length - 1; i++) {
        words[i] += ' '.repeat(minSpace);
        if (extraSpaces > 0) {
            words[i] += ' ';
            extraSpaces--;
        }
    }

    return words.join(' ');
}

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';


console.log(justify('123 45 6', 7), '123  45\n6');
console.log(justify('12 45 1234 12', 6), '12  45\n1234\n12');
console.log(justify('123', 7), '123');
console.log(justify('', 10), '');
console.log(justify(LIPSUM, 30));