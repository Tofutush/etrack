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
            <button className='graybutton' onClick={() => onAdd(createSelectedCourse(course))}>Add</button>
        </CourseCard >
    )
    return (
        <div className="course-list">
            {cards}
        </div>
    )
}

export default CourseList;
