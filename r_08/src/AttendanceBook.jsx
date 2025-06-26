import React from 'react';
const students=[
    {id:1,name:'Aa',},{id:2,name:'Bb',},{id:3,name:'Cc',},{id:4,name:'Dd',},
];
function AttendanceBook(props) {
    return (
        <ul>
            {students.map((students)=> {
                return <li key ={students.id}>{students.name}</li>
            })}
        </ul>
    );
}
export default AttendanceBook;
