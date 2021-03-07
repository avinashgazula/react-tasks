import PropTypes from 'prop-types';
import Button from './Button';


const Header = (props) => {

    const onClick = () => {
        console.log('clicked');
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button onClick={onClick} color="green" text="Add Task" />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: 'Tasks'
}

export default Header
