function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <div>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{total}</p>
          <p>Positive feedback:{positivePercentage}%</p>
        </div>
      )}
    </div>
  );
}

export default Statistics;
