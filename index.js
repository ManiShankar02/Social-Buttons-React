const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="container">
    <h1 className="head"> Social Buttons</h1>
    <div className="sub-container">
      <div className="button-container">
        <Button buttonText="Like" className="Like-button" />
        <Button buttonText="Comment" className="Comment-button" />
        <Button buttonText="Share" className="Share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
