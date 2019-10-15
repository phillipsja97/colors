import c from './helpers/data/colors';

const colors = c.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }
  // using the forEach loop instead of the for loop we do above
  colors.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  const newColors = [];
  for (let j = 0; j < colors.length; j += 1) {
    if (colors[j].hexValue[0] === 'F') {
      newColors.push(colors[j]);
    }
  }
  console.log('forEach', newColors);
  // using the filter arrayMethod below instead of doing what we did above
  const filterColors = colors.filter((x) => x.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

const findFunc = () => {
  let colorToFind = {};
  for (let k = 0; k < colors.length; k += 1) {
    if (colors[k].name === 'green') {
      colorToFind = colors[k];
    }
  }
  console.log('for', colorToFind.hexValue);
  // using the find arrayMethod below instead of what we did above
  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = () => {
  // creating an array of h1 tags for each color name
  const h1Tags = [];
  for (let l = 0; l < colors.length; l += 1) {
    h1Tags.push(`<h1>${colors[l].name}</h1>`);
  }
  console.log('for', h1Tags);
  // using the .map function below instead of doing what we did above
  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.log('forMap', colorMap);
};

const reduceFunc = () => {
  // total number of upvotes
  let total = 0;
  for (let h = 0; h < colors.length; h += 1) {
    total += colors[h].upVotes;
  }
  console.log('theTotalIs', total);
  // using reduce arrayMethod below instead of doing what we did above
  const upVoteTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('totalIs', upVoteTotal);
};

const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
