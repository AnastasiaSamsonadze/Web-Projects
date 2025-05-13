const task1 = document.querySelector("#task1");
let youngerThan100 = 0;
for (let i = 0; i < wizards.length; i++) {
  if (wizards[i].age < 100) {
    youngerThan100++;
  }
}

task1.innerHTML = youngerThan100;

const task2 = document.querySelector("#task2");
let sum = 0;

for (let i = 0; i < wizards.length; i++) {
  sum += wizards[i].age;
}

let averageAge = sum / wizards.length;
task2.innerHTML = averageAge;

const task3 = document.querySelector("#task3");
let oldestWizard = wizards[0];
for (let i = 1; i < wizards.length; i++) {
  if (wizards[i].age > oldestWizard.age) {
    oldestWizard = wizards[i];
  }
}
task3.innerHTML = oldestWizard.name;

const task4 = document.querySelector("#task4");
let mostExperienced = wizards[0];
for (let i = 1; i < wizards.length; i++) {
  if (wizards[i].xp > mostExperienced.xp) {
    mostExperienced = wizards[i];
  }
}

task4.innerHTML = mostExperienced.name === oldestWizard.name;

const task5 = document.querySelector("#task5");
let fireSpells = [];
for (let i = 0; i < wizards.length; i++) {
  for (let j = 0; j < wizards[i].spells.length; j++) {
    if (wizards[i].spells[j].includes('Fire')) {
      fireSpells.push(wizards[i].spells[j]);
    }
  }
}

task5.innerHTML = fireSpells.join(', ');

console.log(wizards);
