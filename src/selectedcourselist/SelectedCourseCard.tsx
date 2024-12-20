import SelectedCourse from "../interfaces/SelectedCourse";

// one strip of a course

type SelectedCourseCardProps = {
    course: SelectedCourse,
    optional?: boolean,
    onDelete: (course: SelectedCourse) => void
}

function SelectedCourseCard({ course, optional, onDelete }: SelectedCourseCardProps) {
    return (
        <div className="chosen-course flex space-between align-center">
            {optional ?
                <div className="flex align-center">
                    <button className="graybutton" onClick={() => onDelete(course)}>&times;</button>
                    <div>{course.name}</div>
                </div>
                :
                <div>{course.name}</div>
            }
            <select className="graybutton" defaultValue={course.letterGrade}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
    )
}

export default SelectedCourseCard;