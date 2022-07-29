import style from './Style.module.css';
import PropTypes from 'prop-types';
import { shape } from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => (
        <button
          className="style"
          key={item}
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
