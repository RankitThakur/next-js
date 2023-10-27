'use client'
import Link from "next/link";

const StudentList = () => {
  const studentList = [
    {
      name: "test",
      id: 1
    },
    {
      name: "test2",
      id: 2
    },
    {
      name: "tes3",
      id: 3
    },
    {
      name: "test4",
      id: 4
    },
    {
      name: "test5",
      id: 5
    },
    {
      name: "test6",
      id: 6
    }
    ,
    {
      name: "test7",
      id: 7
    }
    ,
    {
      name: "test8",
      id: 8
    }

  ]

  return (
    <div>
      {
        studentList.map((item, key) =>
          <Link key={key} href={`/student/${item.id}`} >
            <p>{item.name}</p></Link>
        )
      }
    </div >
  )
}

export default StudentList