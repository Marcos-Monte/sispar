import styles from './Input.module.scss'

function Input(props){
    return(
        <input 
            className={styles.container} 
            placeholder={props.placeholder}
            type={props.type} 
        />
    )
}

function Select(props){
    return(
        <select 
            className={styles.container}
            placeholder={props.placeholder}
        >
            <option selected disabled>Selecionar</option>
            {
                props.array.map(
                    (option) => <option>{ option }</option>
                )
            }
        </select>
    )
}

export { Input, Select }
