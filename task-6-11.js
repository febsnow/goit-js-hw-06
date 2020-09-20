//Удаление дубликатов из массива

const array = ['sheep', 1, 2, 3, 'sheep', 6, 8, 'sheep'];

// array.filter((item, index) => {
//   console.log(item, index, array.indexOf(item), array.indexOf(item) === index);

//   return array.indexOf(item) === index;
// });

array.reduce((unique, item) => {
  console.log(unique, item, unique.includes(item), unique.includes(item) ? unique : [...unique, item]);

  return unique.includes(item) ? unique : [...unique, item];
}, []);
