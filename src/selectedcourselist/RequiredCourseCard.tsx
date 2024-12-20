import SelectedCourse from "../interfaces/SelectedCourse";

// one strip of a course, but required so theres no close button

type RequiredCourseCardProps = {
    course: SelectedCourse
}

function RequiredCourseCard({ course }: RequiredCourseCardProps) {
    return (
        <div className="chosen-course flex space-between align-center">
            <div>{course.name}</div>
            <select className="graybutton" defaultValue={course.letterGrade}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
    )
}

export default RequiredCourseCard;