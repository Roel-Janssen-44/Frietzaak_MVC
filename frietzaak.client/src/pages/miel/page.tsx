import PageTitle from "../../components/PageTitle";

export default function MielPagina() {
  return (
    <nav className="">
      <PageTitle title="Miel pagina" color="secondary" />
      <p className="mb-10">
        Welke website is nou compleet zonder een Miel-pagina?
      </p>
      <p></p>
      <div>
        <img src="/lama.webp" />
        <img className="mt-10" src="/bus.png" />
        <img src="/belgie.avif" />
      </div>
    </nav>
  );
}
