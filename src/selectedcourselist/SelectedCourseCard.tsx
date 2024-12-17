import SelectedCourse from "../interfaces/SelectedCourse";

// one strip of a course

type SelectedCourseCardProps = {
    course: SelectedCourse
}

function SelectedCourseCard({ course }: SelectedCourseCardProps) {
    return (
        <div className="chosen-course">
            <button>X</button>
            <p>{course.name}</p>
            <select defaultValue={course.letterGrade}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
    )
}

export default SelectedCourseCard;