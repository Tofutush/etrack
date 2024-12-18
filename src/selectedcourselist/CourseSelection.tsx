import SelectedCourse from '../interfaces/SelectedCourse';
import SelectedCourseCard from "./SelectedCourseCard";

// the thing off to the left showing a list of the courses youve selected

type CourseSelectionProps = {
    courses: Array<SelectedCourse>,
    onDelete: (course: SelectedCourse) => void;
}

function CourseSelection({ courses, onDelete }: CourseSelectionProps) {
    let selectedCourses = courses.map(c => <SelectedCourseCard key={c.name} course={c} onDelete={onDelete} />);
    return (
        <div id="search-bar" className="graybox">
            <div>你的选择</div>
            {selectedCourses}
        </div>
    )
}

export default CourseSelection;