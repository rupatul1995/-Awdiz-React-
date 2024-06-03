function Mapping({students}){
    console.log(students);
    return(
        <div>
            <h1>Mapping </h1>
            <ul>
                {students.map((student)=>(
                    <li>{student}</li>
                ))}
            </ul>
        </div>
    );
}
 export default Mapping;