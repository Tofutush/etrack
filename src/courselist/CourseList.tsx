import Course from '../interfaces/Course';
import SelectedCourse from '../interfaces/SelectedCourse';
import CourseCard from './CourseCard';
import createSelectedCourse from '../createSelectedCourse';

// the list of courses, each course being a card

type CourseListProps = {
    list: Array<Course>,
    onAdd: (course: SelectedCourse) => void;
}

function CourseList({ list, onAdd }: CourseListProps) {
    const cards = list.map(course =>
        <CourseCard key={course.name} course={course}>
            <button onClick={() => onAdd(createSelectedCourse(course))}>Add</button>
        </CourseCard >
    )
    return (
        <div className="course-list gap">
            {cards}
        </div>
    )
}

export default CourseList;
