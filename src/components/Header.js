import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title, onToggle, showAddForm }) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onToggle} color={showAddForm ? 'red' : 'green'} text={showAddForm ? 'Close' : 'Add Task'} />
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
