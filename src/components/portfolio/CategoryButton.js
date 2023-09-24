import React from "react";

const CategoryButton = (props) => {
  const category = props.category;
  const className = props.className;

  return (
    <button
      className={className}
      onClick={() => props.onChangeCategory(category)}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
