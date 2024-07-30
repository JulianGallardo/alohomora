import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Bienvenido a &nbsp;</h1>
        <h1 className={title({ color: "green" })}>Turnito&nbsp;</h1>
        <h2 className={subtitle()}>Gestiona tus turnos de forma sencilla y rápida</h2>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/login"
            className={buttonStyles({
              size: "lg",
              color: "primary",
              className: "mt-4",
            })}
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className={buttonStyles({
              size: "lg",
              color: "secondary",
              className: "mt-4",
            })}
          >
            Registrarse
          </Link>
          <br />
        </div>  
      </div>
        
    </section>
  );
}
