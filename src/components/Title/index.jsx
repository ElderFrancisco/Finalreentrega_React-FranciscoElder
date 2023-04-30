import styles from './Title.module.scss';

const Title = ({ texto }) => {
  return <h1 className={styles.Title}>{texto}</h1>;
};

export default Title;
