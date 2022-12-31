const students = [
    {
        name: "Luiz",
        firstGrade: 8,
        secondGrade: 9,
    },
    {
        name: "Rebeca",
        firstGrade: 6,
        secondGrade: 8,
    },
    {
        name: "Rafael",
        firstGrade: 4,
        secondGrade: 4,
    },
    {
        name: "Carlos",
        firstGrade: 7,
        secondGrade: 3,
    },
]

function studentsGrade(firstGrade, secondGrade) {
    let avarage = (firstGrade + secondGrade) / 2
    return avarage
} 

for (let student of students) {
    avarageGrade = studentsGrade(student.firstGrade, student.secondGrade)
    let approvedOrNot = avarageGrade < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação!'

    alert(`A média de ${student.name} é ${avarageGrade}.
${approvedOrNot}`)
}