import Course from "../interfaces/Course";

// one single course as a card

type CourseCardProps = {
    course: Course,
    children: React.ReactNode
}

function CourseCard({ course, children }: CourseCardProps) {
    let gradesElt = course.grades.map(g => <div key={g} className="grade">{g}</div>);
    return (
        <div className="course">
            <h1>{course.name}</h1>
            <div>{gradesElt}</div>
            <div>{course.gpa}</div>
            {children}
        </div>
    )
}

export default CourseCard;
