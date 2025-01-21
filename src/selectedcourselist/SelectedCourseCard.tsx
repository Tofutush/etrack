import letterGrade from "../interfaces/letterGrade";
import SelectedCourse from "../interfaces/SelectedCourse";

// one strip of a course

type SelectedCourseCardProps = {
    course: SelectedCourse,
    onChange: (course: SelectedCourse, letterGrade: letterGrade) => void,
    optional?: boolean,
    onDelete: (course: SelectedCourse) => void
}

function SelectedCourseCard({ course, onChange, optional, onDelete }: SelectedCourseCardProps) {
    return (
        <div className="chosen-course row-stuff">
            {optional ?
                <div className="flex align-center">
                    <button className="graybutton" onClick={() => onDelete(course)}>&times;</button>
                    <div>{course.name}</div>
                </div>
                :
                <div>{course.name}</div>
            }
            <select className="graybutton" defaultValue={course.letterGrade} onChange={e => onChange(course, e.target.value as letterGrade)}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </div>
    )
}

export default SelectedCourseCard;