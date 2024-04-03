import PropTypes from 'prop-types';


function Error({ item }) {
    let message = item?.length == 0 ? "I am still Hungry" : null
    return <>
        {message}</>
}
Error.propTypes = {
    item: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Error
