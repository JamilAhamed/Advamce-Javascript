const students =[
    {id:21, name: 'Omar sunny'},
    {id:31, name: 'Manna'},
    {id:42, name: 'Moyouri'},
    {id:71, name: 'Depjol'}
];
const names = students.map( s=> s.name);
const ids = students.map(s =>s.id);
const bigger = students.filter( s =>s.id>30);
const bigger1 = students.find(s=>s.id>30);
console.log(bigger1);