const students = [
    {name: "George Smith" , score: 85 },
    {name: "Hollie Johnson" , score: 95 },
    {name: "Sue Denim" , score: 78 }
]

class Exercise {
    constructor(students){
    this.students = students
    this.extraCredit = this.giveExtraCredit()
    this.passers = this.getPassers()

    }
    giveExtraCredit(){
        return this.students.map(stu => {
            return stu.score + 15
        })
        
    }
    getPassers(){
        return this.students.filter(stu => {
            if(stu.score > 59)
            return stu
        })
    }
    getAverage(){
        return this.extraCredit.reduce((acc, curr, i)=>{
            if(i === this.extraCredit.length - 1) return (acc + curr)/(i+1)
            return acc + curr 
        })
    }
}

const exercise = new Exercise(students)
console.log(exercise.getAverage())