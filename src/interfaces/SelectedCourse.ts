import Course from './Course';

interface SelectedCourse extends Course {
    letterGrade: 'A' | 'B' | 'C';
}

export default SelectedCourse;
