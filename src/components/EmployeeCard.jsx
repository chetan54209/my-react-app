function EmployeeCard({employee}) {
  return (
    <div className="employee-card">
       <h2>{employee.name}</h2>
       <p>{employee.designation}</p>
       <p>Status: {employee.isActive ? "Active" : "Inactive"}</p>
       <h4>Skills</h4>
       {employee.skills.map(skills =>{
        <span key={skills}>{skills}</span>
       })}
    </div>
    
  );
}
export default EmployeeCard;
