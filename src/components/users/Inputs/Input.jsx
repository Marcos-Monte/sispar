// Import de arquivo de estilização do componente
import styles from './Input.module.scss';
// Import Imagens
import setaBaixo from '@/assets/icons/setaBaixo.png';

// Input recebe o seu 'tipo' via props. Exemplo: text, email, password, etc...
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

// Input recebe o seu 'tipo' via props. Exemplo: text, email, password, etc...
function InputData(props){
    return(
        <input 
            className={`${styles.container} ${styles.iconeData}`} 
            placeholder={props.placeholder}
            type={props.type} 
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

// Input Select recebe o seu 'tipo' via props. Exemplo: text, email, password, etc...
function Select(props){
    return(
            <div className={styles.containerSelect}>
                <select 
                    // defaultValue={'Selecionar'}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                >
                    {/* Opção padrão que não conta como seleção */}
                    <option disabled>Selecionar</option>
                    {/* Utilizando 'Array.map' para renderizar valores de um Array como 'option' do Select */}
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


export { Input, InputData, Select };

