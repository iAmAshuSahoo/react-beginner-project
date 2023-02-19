import headingStyle from "./Heading.module.css";

export default function HeadingComponent({ mainHead }) {
  return <p className={headingStyle.heading}>{mainHead}</p>;
}
