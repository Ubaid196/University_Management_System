class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  rollNumber: string;
  courses: Course[] = [];

  constructor(name: string, age: number, rollNumber: string) {
    super(name, age);
    this.rollNumber = rollNumber;
  }
  registerForCourse(course: Course): void {
    this.courses.push(course);
  }
}

class Instructor extends Person {
  salary: number;
  courses: Course[] = [];

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  assignCourse(course: Course): void {
    this.courses.push(course);
  }
}

class Course {
  id: string;
  name: string;
  students: Student[] = [];
  instructor!: Instructor;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  addStudent(student: Student): void {
    this.students.push(student);
    student.registerForCourse(this);
  }

  setInstructor(instructor: Instructor): void {
    this.instructor = instructor;
    instructor.assignCourse(this);
  }
}

class Department {
  name: string;
  courses: Course[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}

const student1 = new Student("Ubaid", 24, "student1");
const student2 = new Student("Abbas", 24, "student2");

const instructor1 = new Instructor("Zaryab", 24, 10000);
const instructor2 = new Instructor("Osama", 24, 10500);

const course1 = new Course("course1", "Metaverse");
const course2 = new Course("course1", "BC");

const department1 = new Department("Mechanical");

department1.addCourse(course1);
department1.addCourse(course2);

student1.registerForCourse(course1);
student2.registerForCourse(course1);

course1.addStudent(student1);
course1.addStudent(student2);

course1.setInstructor(instructor1);

console.log(student1.getName());
console.log(student1.courses);
console.log(instructor1.courses);
console.log(department1.courses);
