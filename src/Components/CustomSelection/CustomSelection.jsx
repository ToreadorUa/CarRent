import Select from "react-select";

export const CustomSelection = ({ items, getSelectedItem, className, name }) => {
  //   <ul>
  //     {items.map((item) => (
  //       <li>{item}</li>
  //     ))}
  //   </ul>
  // console.dir(element)
  return (
    <Select
      options={items}
      className={`"basic-single", ${className}`}
      classNamePrefix="To $"
      isSearchable={false}
      placeholder={"To $"}
      name={name}
    />
  );
};
