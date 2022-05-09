import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title, onAdd, viewStateForm}) => {
    const onClick = () =>
    {
        console.log("Click")
    }
    return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={viewStateForm ? "red": "green"} text={viewStateForm ? 'Ocultar': 'Nueva'} onClick={onAdd}/>
        {/* <Button color='red' text='Borrar'/>
        <Button color='blue' text='Salir'/> */}
    </header>
    )
}

Header.defaultProps = {
    title: "Administrador de Tareas"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headerStyles = {
//     color: "red",
//     backgroundColor: "black",
// }

export default Header
