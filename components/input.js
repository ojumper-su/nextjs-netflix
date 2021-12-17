import styles from './input.module.scss'

const Input = () => {
    return <input 
    type='text' 
    className={styles.input} 
    placeholder='Ttiles, people, genres...'
    />
}
export default Input 