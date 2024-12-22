import letterGrade from "../interfaces/letterGrade";
import SelectedCourse from "../interfaces/SelectedCourse";
import SelectedCourseCard from "./SelectedCourseCard";

// one strip of a course, but required so theres no close button

type RequiredCourseCardProps = {
    course: SelectedCourse,
    onChange: (course: SelectedCourse, letterGrade: letterGrade) => void
}

function RequiredCourseCard({ course, onChange }: RequiredCourseCardProps) {
    return (
        <SelectedCourseCard course={course} onDelete={() => { }} onChange={onChange} />
    )
}

export default RequiredCourseCard;