import Button from "../../components/Button";
import PageTitle from "../..//components/PageTitle";

export default function Login() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <PageTitle color="dark" title="Inloggen als" className="mb-4" />
          <div>
            <Button
              priority="primary"
              link="/dashboard/customer"
              className="mb-4"
            >
              Klant
            </Button>
            <Button priority="primary" link="/dashboard/owner/orders">
              Eigenaar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
