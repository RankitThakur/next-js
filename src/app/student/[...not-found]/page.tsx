import Link from "next/link"

const StudentNotFound = () => {
    return (
        <div>
            <div id="main">
                <div className="fof">
                    <h1>Error 404</h1>
                    <Link href="/login">click here go to login page </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentNotFound