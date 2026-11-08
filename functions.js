const personal = { name: "Ana", age: 20 };
const school = { course: "BSIT", year: 2 };
const student = { ...personal, ...school };

const showName = obj => console.log(obj.name);
const showDetails = obj => console.log(obj);

showName(student);
showDetails(student);
