import style from './Style.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => (
        <button
          className={style.button}
          key={shortid.generate()n}
          type="button"
          name={item}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
