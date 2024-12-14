import CourseProps from "./CourseProps";

function Course({ name, grade }: CourseProps) {
    let grades = grade.map(g => <div className="grade">{g}</div>);
    return (
        <div className="course">
            <h1>{name}</h1>
            <div>{grades}</div>
        </div>
    )
}

export default Course;