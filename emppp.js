class Employee{
  constructor(id,name,desi,join,resi){
        this.id=id;
        this.name=name;
        this.desi=desi;
        this.join=join;
        this.resi=resi;
    }
 getEmp(){
        console.log(this.name);
        console.log(this.name);
    }
}

let emp1=new Employee(100,"ajay","devp",1981,2003);
let emp2=new Employee(101,"vijay","devp",1992,2008);
let emp3=new Employee(102,"bijoy","ba",1999,2007);
let emp4=new Employee(103,"john","ba",1989,2010);
let emp5=new Employee(104,"danie","qa",2009,2014);
let emp6=new Employee(105,"lari","qa",1987,2010);

var arr=[]
arr.push(emp1)
arr.push(emp2)
arr.push(emp3)
arr.push(emp4)
arr.push(emp5)
arr.push(emp6)

//names and desig of employee
//var na=arr.map(obj=>(obj.name))
//console.log(na);
//var em=arr.map(obj=>(obj.desi))
//console.log(em)
var nd=arr.map(ob=>[ob.name,ob.desi])
console.log("name and designation", nd)

//desig=devp print all employee details

var dp=arr.filter(ob=>ob.desi=="devp")
for(Employee of dp){
console.log("employee details if desi=devp",Employee)}


//print all emp details working in 80's(>1980&<1190)

var em=arr.filter(ob1=>(ob1.join>1980 & ob1.join<1990))
console.log("in 80's",em)

//print all emp details experience>9yrs
var no1=arr.filter(obj=>obj.resi-obj.join>9)
console.log("experience>9",no1)


//sort all emps based on joining year

var srt=arr.sort((no1,no2)=>no1.join-no2.join)//no1-no2(descending)
console.log("sorted",srt)

