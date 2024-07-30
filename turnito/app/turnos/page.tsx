import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, Image, Divider, CardFooter } from "@nextui-org/react";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Bienvenido, nombre &nbsp;</h1>
                <br />
                <h1 className={title({ color: "green" })}>¿Qué desea hacer?&nbsp;</h1>

                <div className="flex flex-col items-center justify-center gap-5 mt-8">
                    <Card className="flex flex-col max-w-[400px] gap-2">
                        <CardHeader className="flex gap-2">
                            <Image
                                alt="calendar logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Turnos disponibles</p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p>¿Deseas hacer alguna reserva? Mira los turnos que se encuentran libres.</p>
                            <Link
                                href="/turnos/disponibles"
                                className={buttonStyles({
                                    size: "lg",
                                    color: "primary",
                                    className: "mt-4",
                                })}
                            >
                                Ver turnos
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className="flex flex-col max-w-[400px] gap-2">
                        <CardHeader className="flex gap-2">
                            <Image
                                alt="calendar logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Reservar Turno</p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p>¿Deseas hacer alguna reserva? Mira los turnos que se encuentran libres.</p>
                            <Link
                                href="/turnos/reservar"
                                className={buttonStyles({
                                    size: "lg",
                                    color: "primary",
                                    className: "mt-4",
                                })}
                            >
                                Ver turnos
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className="flex flex-col max-w-[400px] gap-2">
                        <CardHeader className="flex gap-2">
                            <Image
                                alt="calendar logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Cancelar Turno</p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p>¿Deseas hacer alguna reserva? Mira los turnos que se encuentran libres.</p>
                            <Link
                                href="/turnos/cancelar"
                                className={buttonStyles({
                                    size: "lg",
                                    color: "primary",
                                    className: "mt-4",
                                })}
                            >
                                Ver turnos
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </section>
    );
}
