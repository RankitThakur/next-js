"use client";
import { useRouter } from "next/navigation";
import aboutClasses from "./about.module.css";

const About = () => {
  const router = useRouter();
  const navigate = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      <h1>here is about section</h1>
      <button
        className={aboutClasses.main}
        onClick={() => navigate("/about/aboutcollege")}
      >
        Go to about college
      </button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => navigate("/about/aboutstudent")}
      >
        Go to about student
      </button>
    </div>
  );
};

export default About;
