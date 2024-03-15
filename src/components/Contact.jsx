import { IconMail, IconMapSearch } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>Kontakt</p>
              <h3 className="font-bold">
                Zögern Sie nicht! Kontaktieren Sie mich! 👇
              </h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3 className="font-bold">Ort</h3>
                  <p>Rabat, Marokko</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3 className="font-bold">Mail</h3>
                  <a href="mailto:Mahdi.elhasra@gmail.com">
                    Mahdi.elhasra@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
