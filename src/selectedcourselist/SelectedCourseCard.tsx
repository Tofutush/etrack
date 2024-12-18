import SelectedCourse from "../interfaces/SelectedCourse";

// one strip of a course

type SelectedCourseCardProps = {
    course: SelectedCourse,
    onDelete: (course: SelectedCourse) => void;
}

function SelectedCourseCard({ course, onDelete }: SelectedCourseCardProps) {
    return (
        <div className="chosen-course">
            <div>
                <button onClick={() => onDelete(course)}>X</button>
                <div>{course.name}</div>
            </div>
            <select defaultValue={course.letterGrade}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
    )
}

export default SelectedCourseCard;