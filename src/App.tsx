import { useEffect, useState } from 'react';
import CourseList from './courselist/CourseList';
import courseData from './data/selective.json';
import Course from './interfaces/Course';
import SelectedCourse from './interfaces/SelectedCourse';
import CourseSelection from './selectedcourselist/CourseSelection';
import Gpa from './uicrap/Gpa';
import GradeSelector from './uicrap/GradeSelector';
import SearchBar from './uicrap/SearchBar';
import requiredCourseData from './data/required.json';
import createSelectedCourse from './createSelectedCourse';

function App() {
    // const [grade, setGrade] = useState<Array<number>>([1]);
    // const [gpa, setGpa] = useState<number>(0);
    let gpa: number = 0;
    const [courseList, setCourseList] = useState<Array<Course>>(courseData.filter(c => c.grades.includes(1)));
    const [selectedCourses, setSelectedCourses] = useState<Array<SelectedCourse>>([]);
    const [requiredCourses, setRequiredCourses] = useState<Array<SelectedCourse>>(requiredCourseData.filter(c => c.grades.includes(1)).map(c => createSelectedCourse(c)));

    function onGradeChange(grade: Array<number>) {
        // let grade = event.target.value.split('').map(n => parseInt(n));
        // setGrade(grade);
        setSelectedCourses(selectedCourses.filter(c => c.grades.some(g => grade.includes(g))));
        setCourseList(courseData.filter(c => c.grades.some(g => grade.includes(g) && selectedCourses.every(sc => sc.name !== c.name))));
        setRequiredCourses(requiredCourseData.filter(c => c.grades.some(g => grade.includes(g))).map(c => createSelectedCourse(c)));
    }

    function onAddCourse(course: SelectedCourse) {
        // when we add a course from the list to selected, we append it to selectedcourses and remove it from the course list
        if (!selectedCourses.some(c => c.name === course.name)) {
            setSelectedCourses([...selectedCourses, course]);
            setCourseList(deleteCourseFromCourseList(course));
        }
    }

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
        let newgpa = 0;
        for (let z = 0; z < selectedCourses.length; z++) {
            console.log(selectedCourses[z]);

            switch (selectedCourses[z].letterGrade) {
                case 'A':
                    newgpa += 100;
                    break;
                case 'B':
                    newgpa += 10;
                    break;
                case 'C':
                    newgpa += 1;
                    break;
                default:
                    throw new Error(`oops, grade ${selectedCourses[z].letterGrade} doesnt exist!`);
            }
        }
        for (let z = 0; z < requiredCourses.length; z++) {
            switch (requiredCourses[z].letterGrade) {
                case 'A':
                    newgpa += 100;
                    break;
                case 'B':
                    newgpa += 10;
                    break;
                case 'C':
                    newgpa += 1;
                    break;
                default:
                    throw new Error(`oops, grade ${requiredCourses[z].letterGrade} doesnt exist!`);
            }
        }
        gpa = newgpa;
    }
    calculateGpa();

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
                    <CourseSelection courses={selectedCourses} required={requiredCourses} onDelete={removeSelectedCourse} />
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
