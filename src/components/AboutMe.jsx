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
                angehender entwickler <br /> ansässig in Rabat, Marokko 📍
              </h4>
              <p>
                Hallo, mein Name ist Mahdi, und ich bin ein angehender
                entwickler. Meine Leidenschaft besteht darin, eine saubere UI/UX
                für meine Benutzer zu erstellen und zu entwickeln.
                <br />
                <br />
                Mein Hauptstapel besteht derzeit aus React/Next.js in
                Kombination mit Tailwind CSS und TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
