import { FunctionComponent } from "preact";
import Button from "./Button.tsx";
import { useState } from "preact/hooks";
import { FreshContext, Handlers } from "$fresh/server.ts";

type props = {
    name: string,
    contador: number,
}

type Contenido = {
    texto?: string,
}

export const handler: Handlers = {
    GET: (req: Request, ctx: FreshContext<unknown, Contenido>) => {
        const url = new URL(req.url);
        const texto = url.searchParams.get("texto") || undefined;
        return ctx.render({ texto });
    },
}

const Modulo: FunctionComponent<props & Contenido> = (Props) => {
    let info = "";
    const { name } = Props;
    const [ number, setContador ] = useState<number>(Props.contador);
    const [ string, setText ] = useState<string>("");
    
    return (
        <>
            <div class="oculto" hidden={number === 1}>
                <section class="espaciado">
                    <b>{name}</b>
                    <Button variant ="Mostrar_mas" onClick={() => setContador(number + 1)}>Mostrar mas</Button>
                </section>
            </div>
            <div class="ampliado" hidden={number === 0}>
                <section class="espaciado">
                    <b>{name}</b>
                    <Button variant = "Mostrar_menos" onClick={() => setContador(number - 1)}>Mostrar menos</Button>
                </section>
                <hr/>
                <section class="columnas">
                    <i>{Props.texto}</i>
                    <input type="text" id="itexto" name="texto" value={Props.texto}></input>
                    <button type="submit" onClick={
                        () => {
                            if(Props.texto){
                                setText(string+Props.texto);
                            }
                        }
                    }>Input de texto</button>
                </section>
            </div>
        </>
    );
}

export default Modulo;

/**
 * 
            <div class="ampliado" hidden={number%2 === 0}>
                <header>
                    <b class = "left">{name}</b>
                    <Button variant = "Mostrar_menos" onClick={() => setContador(number - 1)}>Mostrar menos</Button>
                </header>
                    <hr />
                    <section class="columnas">
                        <i>{Props.texto}</i>
                        <input type="text" id="itexto" name="texto" value={Props.texto}></input>
                        <button type="submit" onClick={
                            () => {
                                if(Props.texto){
                                    setText(string+Props.texto);
                                }
                            }
                        }
                        >Input de texto</button>
                    </section>
            </div>
 */