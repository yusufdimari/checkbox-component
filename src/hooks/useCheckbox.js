import { useState } from "react";

export const useCheckbox = () => {
  //a list of the checkbox options
  const checkBoxOptions = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState(
    Array(checkBoxOptions.length).fill(false)
  );

  //a function to check all the boxes at once
  const handleAllChecked = (checked) => {
    setAllChecked(checked);
    setIndividualChecks(Array(checkBoxOptions.length).fill(checked));
  };

  //a function to handle individual checkbox clicks
  const handleIndividualCheck = (index, checked) => {
    const newIndividualChecks = individualChecks.map((check, i) =>
      i === index ? checked : check
    );
    setIndividualChecks(newIndividualChecks);
    setAllChecked(newIndividualChecks.every((check) => check));
  };

  return {
    checkBoxOptions,
    allChecked,
    individualChecks,
    handleAllChecked,
    handleIndividualCheck,
  };
};
