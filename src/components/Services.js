import { ourServices } from "../data";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title firstWord="our" secondWord="services" />

      <div className="section-center services-center">
        {ourServices.map((link) => {
          const { id, icon, title, text } = link;

          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
