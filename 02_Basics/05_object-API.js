const course ={
    courseName: 'JS in Hindi',
    price:'999',
    courseInstructor: 'hitesh Sir'
}
// Course.courseInstructor

const {courseInstructor: instructor} = course //De- Structure of Object

console.log(instructor);
