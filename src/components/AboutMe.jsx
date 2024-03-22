import AboutImg from "../../public/about-img.jpeg";
import RoundedText from "../../public/text2.svg";
import WorkingEmoji from "../../public/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side  flex  justify-center">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>Über mich</h3>
              <h4 className="font-bold">
                Angehender Entwickler <br /> ansässig in Sale, Marokko 📍
              </h4>
              <p>
                <b>
                  Schon in jungen Jahren war ich fasziniert von Technologie und
                  wie sie uns im Alltag unterstützen kann.
                </b>{" "}
                Diese Faszination führte mich dazu, Informatik zu studieren und
                meine Fähigkeiten als Entwickler zu perfektionieren.
                <br />
                <br />
                <b>
                  Ich bin hoch motiviert, Neues zu lernen und mich ständig
                  weiterzuentwickeln.
                </b>{" "}
                In meiner Freizeit beschäftige ich mich mit den neuesten Trends
                in der Softwareentwicklung und experimentiere mit neuen
                Technologien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
