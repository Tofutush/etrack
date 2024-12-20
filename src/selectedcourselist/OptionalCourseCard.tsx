import SelectedCourse from "../interfaces/SelectedCourse"
import SelectedCourseCard from "./SelectedCourseCard"

type OptionalCourseCardProps = {
    course: SelectedCourse,
    onDelete: (course: SelectedCourse) => void
}

function OptionalCourseCard({ course, onDelete }: OptionalCourseCardProps) {
    return (
        <SelectedCourseCard course={course} onDelete={onDelete} optional />
    )
}

export default OptionalCourseCard;