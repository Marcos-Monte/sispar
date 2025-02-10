// Import de arquivo de estilização do componente
import styles from './Input.module.scss';
// Import Imagens

// Input recebe o seu 'tipo' via props. Exemplo: text, email, password, etc...
function Input(props){
    return(
        <input 
            className={styles.container} 
            placeholder={props.placeholder}
            type={props.type} 
        />
    )
}

// Input Select recebe o seu 'tipo' via props. Exemplo: text, email, password, etc...
function Select(props){
    return(
            <select 
                className={styles.containerSelect}
                placeholder={props.placeholder}
            >
                {/* Opção padrão que não conta como seleção */}
                <option selected disabled>Selecionar</option>
                {/* Utilizando 'Array.map' para renderizar valores de um Array como 'option' do Select */}
                {
                    props.array.map(
                        (option, index) => <option key={index}>{ option.toUpperCase() }</option>
                    )
                }
            </select>
    )
}

export { Input, Select };

