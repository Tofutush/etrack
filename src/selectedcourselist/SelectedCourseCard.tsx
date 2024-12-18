import SelectedCourse from "../interfaces/SelectedCourse";

// one strip of a course

type SelectedCourseCardProps = {
    course: SelectedCourse,
    onDelete: (course: SelectedCourse) => void;
}

function SelectedCourseCard({ course, onDelete }: SelectedCourseCardProps) {
    return (
        <div className="chosen-course">
            <button onClick={() => onDelete(course)}>X</button>
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