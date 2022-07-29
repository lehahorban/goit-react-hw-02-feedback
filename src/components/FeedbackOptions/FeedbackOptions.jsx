import style from './Style.module.css';

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
      {/* <button type="button" onClick={this.goodFeedback}>
        Good
      </button>
      <button type="button" onClick={this.neutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={this.badFeedback}>
        Bad
      </button> */}
    </div>
  );
}

export default FeedbackOptions;
