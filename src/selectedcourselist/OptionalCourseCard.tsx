import letterGrade from "../interfaces/letterGrade"
import SelectedCourse from "../interfaces/SelectedCourse"
import SelectedCourseCard from "./SelectedCourseCard"

type OptionalCourseCardProps = {
    course: SelectedCourse,
    onDelete: (course: SelectedCourse) => void,
    onChange: (course: SelectedCourse, letterGrade: letterGrade) => void
}

function OptionalCourseCard({ course, onDelete, onChange }: OptionalCourseCardProps) {
    return (
        <SelectedCourseCard course={course} onDelete={onDelete} onChange={onChange} optional />
    )
}

export default OptionalCourseCard;