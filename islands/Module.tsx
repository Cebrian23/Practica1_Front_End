import { FunctionComponent } from "preact";
import Button from "./Button.tsx";
import { useSignal } from "@preact/signals";

type props = {
    name: string,
    contador: number,
    texto: string
}

const Modulo: FunctionComponent<props> = (Props) => {
    const { name } = Props;
    const number = useSignal<number>(Props.contador);
    const texto = useSignal<string>(Props.texto);
    const input = useSignal<string>("");

    return (
        <>
            <div class="oculto" hidden={number.value === 1}>
                <section class="espaciado">
                    <b>{name}</b>
                    <Button variant ="Mostrar_mas" onClick={() => number.value++}>Mostrar mas</Button>
                </section>
            </div>
            <div class="ampliado" hidden={number.value === 0}>
                <section class="espaciado">
                    <b>{name}</b>
                    <Button variant = "Mostrar_menos" onClick={() => number.value--}>Mostrar menos</Button>
                </section>
                <hr/>
                <section class="columnas">
                    <i>{texto.value}</i>
                    <input type="text" id="itexto" name="texto" onInput={(e) => input.value = e.currentTarget.value}/>
                    <button type="submit" onClick={() => texto.value = input.value}>Input de texto</button>
                </section>
            </div>
        </>
    );
}

export default Modulo;