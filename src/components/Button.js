// const Button = ({ onClickHandler, value, title }) => {
//   return (
//     <button onClick={onClickHandler} value={value} className="btns">
//       {title}
//     </button>
//   );
// };

// export default Button;



const Button = ({ onClickHandler, title, isActive }) => {
  return (
    <button
      className={`btns ${isActive ? "active" : ""}`}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;
