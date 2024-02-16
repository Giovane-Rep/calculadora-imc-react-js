import { useState } from "react";

import Button from "./Button";

import "./ImcCalculator.css";

const ImcCalculator = ({ calcImc }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();

        setHeight("");
        setWeight("");
    };

    const validDigits = (text) => {


        text = text.replace(/[^0-9,]/g, "");

        while (text.split(',').length > 2) { // enquanto houver mais de uma vírgula
            // substitui a última ocorrência de vírgula
            text = text.replace(/,([^,]*)$/, '$1');
        }

        return text;
    }

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setHeight(updatedValue);
    }

    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setWeight(updatedValue);
    }

    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            placeholder="Exemplo 1,70"
                            onChange={(e) => handleHeightChange(e)}
                            value={height}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            placeholder="Exemplo 72,5"
                            onChange={(e) => handleWeightChange(e)}
                            value={weight}
                        />
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
                    <Button id="clear-btn" text="Limpar" action={clearForm} />
                </div>
            </form>

        </div>
    )
}

export default ImcCalculator;