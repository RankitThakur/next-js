"use client"
const StudentDetails = (props: any) => {
    const { params } = props
    return (
        <div>
            <h1>Student Details</h1>
            <strong>Student ID:  {params.student}</strong>
        </div>
    );
}

export default StudentDetails;