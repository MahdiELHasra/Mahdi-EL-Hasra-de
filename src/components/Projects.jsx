import JotionPreview from "../../public/preview/Jotion.png";
import SpacePreview from "../../public/preview/space-tourismus.png";

import ProBox from "./ProBox";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p className="text-[#147efb] text-[1.7rem] font-[700] uppercase">
              portfolio
            </p>
            <h3 className="font-bold">
              Jedes Projekt ist ein einzigartiges Entwicklungsstück. 🧩
            </h3>
            <div className="projects-grid">
              <ProBox
                title="Jotion"
                img={JotionPreview}
                description="Erstellt mit Next.js 14, React, Convex, TailwindCss, Shadcn und ClerkAuth, bietet Echtzeit-Datenbanksynchronisation. Es verfügt über einen Notion-ähnlichen Editor, Dual-Theme-Unterstützung, eine unendliche hierarchische Dokumentenstruktur und einen robusten Authentifizierungsmechanismus. Darüber hinaus bietet es Funktionen für Dateiverwaltung, dynamische Symbole, mobile Reaktionsfähigkeit, Web-Publishing, eine ein-/ausklappbare Seitenleiste, nahtlose Integration mit Landing-Pages, anpassbare Titelbilder und Dateiabruf-Optionen."
                code="https://github.com/MahdiELHasra/Jotion-x-note-taking"
                demo="https://jotion-x.vercel.app/"
              />
              <ProBox
                title="Space Tourism"
                img={SpacePreview}
                description="
                Dieses Projekt, eine Programmieraufgabe von Frontend Mentor, beinhaltete den Aufbau einer responsiven und interaktiven Website für Weltraumtourismus. Die mit HTML, CSS und JavaScript erstellte Seite verfügt über ein dynamisches Layout, das für verschiedene Bildschirmgrößen optimiert ist, interaktive Elemente mit Hover-Zuständen und ein Tab-System für eine effiziente Informationsanzeige. "
                code="https://github.com/MahdiELHasra/Space-Tourism"
                demo="https://space-tourism-z.vercel.app/"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
