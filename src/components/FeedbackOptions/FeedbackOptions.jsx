export const FeedbackOptions = ({ options }, onLeaveFeedback) => {
  return (
    <ul>
      {options.map(el => (
        <button type="button" key={el} onClick={onLeaveFeedback}>
          {el}
        </button>
      ))}
    </ul>
  );
};
