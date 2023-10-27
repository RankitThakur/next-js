"use client"
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const navigate = (path: string) => {
        router.push(path)
    }
    return (
        <div>
            <h1>here is about section</h1>
            <button className="button" onClick={() => navigate("/login/loginstudent")}>Go to student login</button>
            <br />
            <br />
            <button className="button" onClick={() => navigate("/login/loginteacher")}>Go to teacher login</button>
        </div>
    );
}

export default Login;