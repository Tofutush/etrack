import { useState, useEffect } from 'react';
import CourseList from './courselist/CourseList';
import courseData from './data.json';
import Course from './interfaces/Course';
import SelectedCourse from './interfaces/SelectedCourse';
import CourseSelection from './selectedcourselist/CourseSelection';
import Gpa from './uicrap/Gpa';
import GradeSelector from './uicrap/GradeSelector';
import SearchBar from './uicrap/SearchBar';

function App() {
    const [grade, setGrade] = useState<number>(1);
    const [gpa, setGpa] = useState<number>(0);
    const [courseList, setCourseList] = useState<Array<Course>>(courseData.filter(c => c.grades.includes(1)));
    const [selectedCourses, setSelectedCourses] = useState<Array<SelectedCourse>>([]);

    function onGradeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        // when grade changes, we'll just keep the courses that are offered in this grade and filter out the others
        let grade = parseInt(event.target.value);
        setGrade(grade);
        setSelectedCourses(selectedCourses.filter(c => c.grades.includes(grade)));
        setCourseList(courseData.filter(c => c.grades.includes(grade)).filter(c => selectedCourses.every(sc => sc.name !== c.name)));
    }

    function onAddCourse(course: SelectedCourse) {
        // when we add a course from the list to selected, we append it to selectedcourses and remove it from the course list
        if (!selectedCourses.some(c => c.name === course.name)) {
            setSelectedCourses([...selectedCourses, course]);
            setCourseList(deleteCourseFromCourseList(course));
        }
    }

    useEffect(() => calculateGpa(), [courseList]);

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
            <div id="title">
                <h1>ETrack GPA</h1>
                <p>欢迎使用 ETrack GPA 预估计算器</p>
            </div>
            <div className="flexbox">
                <div className="left-side">
                    <Gpa value={gpa} />
                    <GradeSelector onChange={onGradeChange} />
                    <CourseSelection courses={selectedCourses} onDelete={removeSelectedCourse} />
                </div>
                <div className="right-side">
                    <SearchBar />
                    <CourseList list={courseList} onAdd={onAddCourse} />
                </div>
            </div>
        </>
    )
}

export default App;
