import Integrantes from "../../components/integrantes/Integrantes";

function ListaIntegrantes() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-20">
        <Integrantes
          name={"Asttryd Pacheco"}
          usuario={"@Asttryd"}
          foto={"https://avatars.githubusercontent.com/u/95387263?v=4"}
          linkLinkedin={"https://www.linkedin.com/in/asttryd-pacheco/"}
          linkGithub={"https://github.com/Asttryd"}
        />
        <Integrantes
          name={"Dafne Duda"}
          usuario={"@dafneduda"}
          foto={"https://avatars.githubusercontent.com/u/147463270?v=4"}
          linkLinkedin={"https://www.linkedin.com/in/dafneduda/"}
          linkGithub={"https://github.com/dafneduda"}
        />
        <Integrantes
          name={"Douglas Papani"}
          usuario={"@douglasppn"}
          foto={"https://avatars.githubusercontent.com/u/19985517?v=4"}
          linkLinkedin={"https://linkedin.com/in/douglas-papani/"}
          linkGithub={"https://github.com/douglasppn"}
        />
        <Integrantes
          name={"Gabriel Vieira"}
          usuario={"@GabrielVieiraz9"}
          foto={"https://avatars.githubusercontent.com/u/147213232?v=4 "}
          linkLinkedin={"https://www.linkedin.com/in/gabriel-vieira-z9/"}
          linkGithub={"https://github.com/GabrielVieiraz9"}
        />
        <Integrantes
          name={"Guilherme Moura"}
          usuario={"@gumeeee"}
          foto={"https://avatars.githubusercontent.com/u/124413755?v=4"}
          linkLinkedin={
            "https://www.linkedin.com/in/guilherme-moura-13a991259/"
          }
          linkGithub={"https://github.com/gumeeee"}
        />
        <Integrantes
          name={"Millena Oliveira"}
          usuario={"@MillenaOliveiraSouza"}
          foto={"https://avatars.githubusercontent.com/u/91639335?v=4"}
          linkLinkedin={"https://www.linkedin.com/in/millena-oliveira-souza/"}
          linkGithub={"https://github.com/MillenaOliveiraSouza"}
        />
        <Integrantes
          name={"Rodrigo Rodrigues"}
          usuario={"@ddigo99"}
          foto={"https://avatars.githubusercontent.com/u/157827964?v=4"}
          linkLinkedin={"https://www.linkedin.com/in/dev-rodrigo-rodrigues//"}
          linkGithub={"https://github.com/ddigo99"}
        />
      </div>
    </>
  );
}

export default ListaIntegrantes;
