
//Es necesario importar useState, useEffect y useContext para usar los hooks
    import {useState, useEffect, useContext} from "react";
//3)Importamos nuestra creación del context   
    import {generalContext} from "../App";

/*-------UseState------*/ 
//useState se usa en todos aquellos elementos cuyo estado inicial es susceptible de cambiar

    export default function StateHook({title, textColor}) {  
        /*Hacemos una asignación con la función del hook
        que nos devuelve un array */
        //nomenclatura estándar para establecer las variables. En los paréntesis de useStates se establece el estado inicial
            const [color, setColor]= useState(textColor);
            const goodCheck = "green";
            const badCheck = "red";
            const [btnText, setBtnText]= useState(goodCheck === color ? "red": goodCheck)
        

        /*Creamos la función del onclick. Si queremos introducir parámetros, debemos introducir la lógica en el return*/
            const changeColor = function(newColor){
                return () => {
                if(newColor === color){
                //setColor cambia el valor de color
                setColor(badCheck)
                setBtnText(newColor)
                } else{
                setColor(newColor)
                setBtnText(badCheck)
                };
                }
            }

            return (
                <div>
                    <h1>{title}</h1>
                
            {/*Hacemos uso del operador ternario dentro de return*/}
                    {goodCheck === color ?
                        (<p style={{color: color}}>The text color is {color}</p>) :
                        (<p style={{color: color}}>The text color isn't {goodCheck}</p>)}

            {/*Los eventos se introducen inline */}
                <button onClick={changeColor(goodCheck)}>Change text color to {btnText}</button>
            </div>
        );
    };
    /*Establecer propiedades por defecto de los props */
        StateHook.defaultProps = {
            title: "useState",
            textColor: "black"
        }

/*-------UseEffect------*/ 
//useEffect se usa para ejecutar una función cuando se monta o desmonta una página. Muy útil para fetch()

    export function EffectHook({title}) {
        
        const [text, setText] = useState("Estado 1");
        
        //tiene una función que se ejecuta al montar la página
            useEffect(() => {
                console.log("La página se ha montado");
                setText("Estado 2");
        //tiene un return que se ejecuta al desmontar la página (guardar un formulario, saltar avisos...)
            return () => {
                console.log("La página se ha Desmontado");
            } 
        //entre corchetes se indican las dependencias que activarán useEffect cuado estas cambien. Si no tiene dependencias, dejarlo vacío
            }, []);
        
        return (
        <div>
            <h1>{title}</h1>
            <button>{text}</button>
        </div>
        );
    };

    EffectHook.defaultProps = {
        title: "useEffect"
    };

/*-------UseContext------*/ 
//useContect se usa para enviar valores a diferentes partes de las ramas

    export function ContextHook(){
        //4) Establecemos las variables del context usando el mismo nombre
        const {welcome} = useContext(generalContext);
        const {bye} = useContext(generalContext);
        return (
            <div>
                <h1>{welcome}</h1>
                <h2>{bye}</h2>
            </div>
        )
    }