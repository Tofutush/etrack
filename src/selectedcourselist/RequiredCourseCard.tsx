import SelectedCourse from "../interfaces/SelectedCourse";
import SelectedCourseCard from "./SelectedCourseCard";

// one strip of a course, but required so theres no close button

type RequiredCourseCardProps = {
    course: SelectedCourse
}

function RequiredCourseCard({ course }: RequiredCourseCardProps) {
    return (
        <SelectedCourseCard course={course} onDelete={() => { }} />
    )
}

export default RequiredCourseCard;