import JotionPreview from "../../public/preview/Jotion.png";
import SpacePreview from "../../public/preview/space-tourismus.png";
import CarRentalPreview from "../../public/preview/car-rental.png";
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
                title="Car Rental"
                img={CarRentalPreview}
                description="Eine Autovermietungsplattform, entwickelt mit React.js und gestaltet mit SCSS und CSS, ist eine wesentliche Online-Destination für Nutzer, die Fahrzeuge für private oder geschäftliche Zwecke mieten möchten. Diese benutzerfreundliche Website bietet eine nahtlose Oberfläche, die ein müheloses Suchen, Vergleichen und Reservieren von Autos aus einer umfangreichen Flotte ermöglicht. Die Nutzer können eine vielfältige Auswahl an Fahrzeugen erkunden, die sich in Marke, Modell, Größe und Preis unterscheiden, um sicherzustellen, dass für jeden Bedarf und jedes Budget etwas Passendes dabei ist. "
                code="https://github.com/MahdiELHasra/car-rental"
                demo="https://car-rental-x.vercel.app/"
              />
              <ProBox
                title="Space Tourism"
                img={SpacePreview}
                description="
                Dieses spannende Projekt, das eine Programmieraufgabe von Frontend Mentor darstellt, forderte die Entwicklung einer hochmodernen und ansprechenden Website für den Weltraumtourismus. Die Website wurde mithilfe von HTML, CSS und JavaScript erstellt und bietet ein dynamisches Layout, das sich nahtlos an verschiedene Bildschirmgrößen anpasst. Durch die Implementierung von interaktiven Elementen mit Hover-Zuständen und einem effizienten Tab-System wird die Information auf der Seite übersichtlich präsentiert und die Benutzererfahrung optimiert."
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
