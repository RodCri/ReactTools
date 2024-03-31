import styles from './CardUser.module.css';

const CardUserStyles = {
  fontSize: '2rem',
  color: "green",
  fontWeight: 'bold'
}

export const CardUser = () => {
  return (
    <>
      <div className="card__container">
        {/* Estilos mediante un objeto muy similar a style Components */}
        <p className="card__name" style={CardUserStyles}>Yill</p>
        {/* Estilos inline */}
        <p className="card__info" style={{backgroundColor: '#e0e0e0', color: '#004',padding:'1rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni rem odit ut culpa incidunt sed ratione voluptatibus dolorem,</p>
        {/* Estilos mediante un modulo de css */}
        <button className={styles.card__cta}>Ver mas</button>
      </div>
    </>
  )
}
