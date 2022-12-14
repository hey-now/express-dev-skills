const skills = [
    {id: 1, img:'https://imgur.com/ciw8Uhw.png', skill: 'HTML', learned: true, descr: 'Web design and structuring'},
    {id: 2, skill: 'CSS', learned: true, descr: 'Flexbox, grid, and Resposive design'},
    {id: 3, skill: 'JavaScript', learned: true, descr: 'General use, OOP fundamentals, and syntax'},
    {id: 4, skill: 'NodeJS', learned: true, descr: 'Client-Server HTTP Communications'},
    {id: 5, skill: 'ExpressJS Framework', learned: true, descr: 'RESTful Routing and server deployment'},
    {id: 6, skill: 'MongoDB', learned: false, descr: 'To be learned!'},
    {id: 7, skill: 'MongooseJS', learned: false, descr: 'To be learned!'},
    {id: 8, skill: 'API', learned: false, descr: 'To be learned!'},
    {id: 9, skill: 'Python', learned: false, descr: 'To be learned!'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill, updatedDescr) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
  const descr = skills.find(skill => skill.id) === id;
  Object.assign(descr, updatedDescr);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.learned = false;
  skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
  }
  
  function getAll() {
    return skills;
  }