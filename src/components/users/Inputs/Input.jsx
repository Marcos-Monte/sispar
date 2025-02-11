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
        />
    )
}

// Input Select recebe o seu 'tipo' via props. Exemplo: text, email, password, etc...
function Select(props){
    return(
            <div className={styles.containerSelect}>
                <select defaultValue={'Selecionar'}>
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
                    <img src={setaBaixo} alt="" />
                </div>
            </div>
    )
}


export { Input, Select };

