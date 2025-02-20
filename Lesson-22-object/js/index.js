// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   features: ['power windows', 'rear camera', 'navigation'],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//   }
// }

// const {make, model, year, features: [f1,f2,f3], safety: {airbags, antilock_brakes, stability_control}} = car

// console.log(make, model, year, f1, f2, f3, airbags, antilock_brakes, stability_control);


const student = {
  name: 'Bruce',
  surname: 'Lee',
  grades: [4, 5, 3]
};

function calculateAverageGrade({name,surname,grades}) {
  let avarageGrade = 0;

  for(let el of grades) {
    avarageGrade += el;
  }

  return avarageGrade / grades.length;
}

console.log(calculateAverageGrade(student));