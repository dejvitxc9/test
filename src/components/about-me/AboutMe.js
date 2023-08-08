import "./AboutMe.css";

function AboutMe() {
  const cvLink = "files/cv-test.pdf";

  const handleDownloadClick = () => {
    window.open(cvLink, "_blank");
  };
  const languages = [
    { name: "React JS", icon: "react.png" },
    { name: "JavaScript", icon: "js.png" },
    { name: "Java", icon: "java.png" },
    { name: "Python", icon: "python.png" },
    { name: "C++", icon: "cpp.png" },
    { name: "PHP", icon: "php.png" },
  ];

  const skills = () => {
    return languages.map((language, index) => {
      return (
        <div key={index} className="col-md-4 col-sm-6 mb-4">
          <div className="card shadow">
            <div className="card-body d-flex align-items-center">
              <img src={`icons/${language.icon}`} className="language-icon" />
              <p className="m-0 primary-font-color">{language.name}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="about-me" id="curriculum-vitae">
      <h2 className="primary-font-color">Curriculum Vitae</h2>
      <div className="cv-container">
        <div className="name-section">
          <h1 className="primary-font-color name-line">
            Nazywam się{" "}
            <span className="accent-font-color no-wrap">Dawid Uniowski</span>
          </h1>

          <p className="primary-font-color">
            Jestem{" "}
            <span className="accent-font-color">Technikiem Programistą</span>{" "}
            oraz{" "}
            <span className="accent-font-color">Technikiem Informatykiem</span>.
          </p>
          <p className="primary-font-color">
            Programowania uczę się od 2020. Szkołę średnią kończe w 2024. W
            trakcie mojej edukacji zdobyłem następujące kwalifikacje:{" "}
            <span className="no-wrap">
              <span className="qualification">Inf.02</span>,{" "}
              <span className="qualification">Inf.03</span>, i{" "}
              <span className="qualification">Inf.04</span>
            </span>
          </p>
          <button className="btn-custom" onClick={handleDownloadClick}>
            Pobierz CV
          </button>
        </div>

        <div className="picture-section">
          <img
            src="/pictures/dawid1.png"
            alt="Zdjęcie"
            className="profile-picture"
          />
        </div>

        <div className="language-section">
          <h2 className="my-4 primary-font-color">Moje umiejętności:</h2>
          {skills()}
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
