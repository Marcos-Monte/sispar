import styles from './Input.module.scss';

import calendario from '@/assets/icons/calendario.png';
import setaBaixo from '@/assets/icons/setaBaixo.png';

import { NumericFormat } from 'react-number-format';

function Input(props){
    return(
        <input 
            className={styles.container} 
            placeholder={props.placeholder}
            type={props.type} 
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

function InputMonetario({ name, value, onChange, placeholder, required = false }) {
    return (
        <NumericFormat
            value={value}
            placeholder={placeholder}
            thousandSeparator="."
            decimalSeparator=","
            prefix="$ "
            name={name}
            required={required}
            className={styles.container}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name,
                        value: values.floatValue || '', // retorna como número
                    }
                });
            }}
        />
    );
}

function InputData(props){
    return(
        <div className={styles.containerData} >
            <input 
                type={props.type} 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            <div className={styles.botao}>
                <img src={calendario} alt="Ícone de seta para baixo, demonstra que existem outras opções ao clicar no componente" />
            </div>
        </div>
    )
}

function Select(props){
    return(
            <div className={styles.containerSelect}>
                <select 
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onMouseEnter={props.mouseEnter}
                    onMouseLeave={props.mouseLeave}
                >
                    <option disabled value=''>Selec.</option>
                    {
                        props.array.map(
                            (option, index) => <option key={index}>{ option.toUpperCase() }</option>
                        )
                    }
                </select>

                <div className={styles.botao}>
                    <img src={setaBaixo} alt="Ícone de seta para baixo, demonstra que existem outras opções ao clicar no componente" />
                </div>
            </div>
    )
}

function TextArea(props){
    return(
        <textarea 
            className={`${styles.containerTextArea}`} 
            placeholder={props.placeholder}
            type={props.type} 
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        ></textarea>
    )
}


export { Input, InputData, InputMonetario, Select, TextArea };

