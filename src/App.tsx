import { useEffect, useState } from 'react';
import CourseList from './courselist/CourseList';
import courseData from './data.json';
import Course from './interfaces/Course';
import SelectedCourse from './interfaces/SelectedCourse';
import CourseSelection from './selectedcourselist/CourseSelection';
import Gpa from './uicrap/Gpa';
import SearchBar from './uicrap/SearchBar';
import GradeSelector from './uicrap/GradeSelector';

function App() {
    const [grade, setGrade] = useState<Array<number>>([1]);
    const [gpa, setGpa] = useState<number>(0);
    const [courseList, setCourseList] = useState<Array<Course>>(courseData.filter(c => c.grades.includes(1)));
    const [selectedCourses, setSelectedCourses] = useState<Array<SelectedCourse>>([]);

    function onGradeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        // when grade changes, we'll just keep the courses that are offered in this grade and filter out the others
        let grade = event.target.value.split('').map(n => parseInt(n));
        setGrade(grade);
    }

    function onAddCourse(course: SelectedCourse) {
        // when we add a course from the list to selected, we append it to selectedcourses and remove it from the course list
        if (!selectedCourses.some(c => c.name === course.name)) {
            setSelectedCourses([...selectedCourses, course]);
            setCourseList(deleteCourseFromCourseList(course));
        }
    }

    // when selected courses is changed, change gpa
    useEffect(() => calculateGpa(), [selectedCourses]);

    // when grade changes, filter out not these grades from the selected list
    useEffect(() => setSelectedCourses(selectedCourses.filter(c => c.grades.some(g => grade.includes(g)))), [grade]);
    // do the same with the course list
    useEffect(() => setCourseList(courseList.filter(c => c.grades.some(g => grade.includes(g)))), [grade]);

    // when selected courses changes, filter out the selected from the course list
    useEffect(() => setCourseList(courseList.filter(c => selectedCourses.every(sc => sc.name !== c.name))), [selectedCourses]);

    function deleteCourseFromCourseList(course: SelectedCourse) {
        // delete a specific course from the list, matched by name
        return courseList.filter(c => c.name !== course.name);
    }

    function deleteCourseFromSelectedCourseList(course: SelectedCourse) {
        // delete a specific course from the *selected* list, matched by name
        return selectedCourses.filter(c => c.name !== course.name);
    }

    function removeSelectedCourse(course: SelectedCourse) {
        // this breaks the order of the course list, but order does not matter anyways
        setSelectedCourses(deleteCourseFromSelectedCourseList(course));
        setCourseList([...courseList, course]);
    }

    function calculateGpa() {
        let gpa = 0;
        for (let z = 0; z < selectedCourses.length; z++) {
            gpa += selectedCourses[z].gpa;
        }
        setGpa(gpa);
    }

    return (
        <>
            <div className="flex gap align-center">
                <h1>ETrack GPA</h1>
                <p>欢迎使用 ETrack GPA 预估计算器</p>
            </div>
            <div className="flex gap">
                <div className="left-side flex f-col gap">
                    <Gpa value={gpa} />
                    <GradeSelector onChange={onGradeChange} />
                    <CourseSelection courses={selectedCourses} onDelete={removeSelectedCourse} />
                </div>
                <div className="right-side flex f-col gap f-1">
                    <SearchBar />
                    <CourseList list={courseList} onAdd={onAddCourse} />
                </div>
            </div>
        </>
    )
}

export default App;
