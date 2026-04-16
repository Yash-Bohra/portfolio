import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PG-Diploma in Advance Computing</h4>
                <h5>CDAC Pune</h5>
              </div>
              <h3>2025/26</h3>
            </div>
            <p>
              Expected to complete a PG-Diploma in Advance Computing from CDAC Pune, focusing on modern web development, backend engineering, systems design, and advanced software engineering concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.TECH in Computer Science (Cyber Security)</h4>
                <h5>Poornima College of Engineering</h5>
              </div>
              <h3>2021/25</h3>
            </div>
            <p>
              Graduated with an 8.92 CGPA. During my Bachelors, I built multiple full-stack and microservices-based projects and studied core subjects like DSA, OOP, and System Design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School & Intermediate</h4>
                <h5>Cambridge Court High School</h5>
              </div>
              <h3>2019/21</h3>
            </div>
            <p>
              Completed Higher Secondary (12th Science) in 2021 with 82.6%, and Secondary education (10th) in 2019 with 84.2%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
