import SelectedCourse from '../interfaces/SelectedCourse';
import OptionalCourseCard from './OptionalCourseCard';
import RequiredCourseCard from './RequiredCourseCard';

// the thing off to the left showing a list of the courses youve selected

type CourseSelectionProps = {
    courses: Array<SelectedCourse>,
    required: Array<SelectedCourse>,
    onDelete: (course: SelectedCourse) => void;
}

function CourseSelection({ courses, required, onDelete }: CourseSelectionProps) {
    let requiredCourses = required.map(c => <RequiredCourseCard key={c.name} course={c} />);
    let selectedCourses = courses.map(c => <OptionalCourseCard key={c.name} course={c} onDelete={onDelete} />);
    return (
        <div id="search-bar" className="graybox flex f-col gap">
            <div>你的选择</div>
            <div className="subtitle">必修</div>
            <div className="flex f-col gap">
                {requiredCourses}
            </div>
            <div className="subtitle">选修</div>
            <div className="flex f-col gap">
                {selectedCourses}
            </div>
        </div>
    )
}

export default CourseSelection;