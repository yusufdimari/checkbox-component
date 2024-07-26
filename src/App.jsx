import "./css/App.css";
import { Divider, Button, CheckBoxItem } from "./components";
import { useCheckbox } from "./hooks/useCheckbox";

function App() {
  //import required hooks for checkbox
  const {
    checkBoxOptions,
    allChecked,
    individualChecks,
    handleAllChecked,
    handleIndividualCheck,
  } = useCheckbox();

  return (
    <div className="app">
      <div className="check-box-container">
        <CheckBoxItem checked={allChecked} onCheck={handleAllChecked} />
        <Divider />
        <div className="w-100">
          {checkBoxOptions.map((option, index) => (
            <CheckBoxItem
              key={index}
              title={option}
              checked={individualChecks[index]}
              onCheck={(checked) => handleIndividualCheck(index, checked)}
            />
          ))}
        </div>
        <Divider />
        <div className="button-container">
          <Button />
        </div>
      </div>
      {/* copyright information */}
      <div className="copyright">
        Created by{" "}
        <a target="_blank" href="https://github.com/yusufdimari">
          Yusuf Dimari
        </a>
      </div>
    </div>
  );
}

export default App;
