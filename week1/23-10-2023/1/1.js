console.log("Hello JCWDOL01203");
console.log("My Name is Andre Timoti");

let message= "test 123";
console.log(message);
var batas = "---------------------------------------------------------------------------------";
console.log(batas);

let a = "let, deklarasi dan assignment a, let tidak bisa di redeclare, bisa reassign dan scope local\n";
var b = "var, deklarasi dan assignment b, var bisa di redeclare, bisa reassign dan scope global\n";
const c = "const, deklarasi dan assignment c, const tidak reassign dan tidak bisa di redeclare dan scope local\n";

console.log("\n",a,b,c);

console.log(batas);

console.log("contoh immutable data type primitif string:\nname1=asdf newName=name1 name1= qwer print newName: ")
let name1 = "asdf";
let newName = name1;
name1= "qwer";

console.log(newName);

console.log(batas)

console.log("contoh mutable data type(refference), object person: {name = 'john',umur='23'}, object person1: person, person1.name='asdf'")

let person= {name: "john", umur: 23};
let person1 = person;
person1.name = "asdf";

console.log("person: ",person);

console.log(batas);

console.log("template literal(harus dengan backtick): let isi = sosis. let hasil = `roti isi ${isi} tambah saus tomat.`");

let isi = "sosis";
let hasil = `roti isi ${isi} tambah saus tomat.`;
console.log(hasil);

console.log(batas);

console.log(new Date());

console.log(batas);