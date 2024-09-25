import React, { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button"; 

function App() {
  return <div>App Component</div>;
}

function App1() {
  let items = ["Philippines", "Japan", "Tokyo", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

const App2: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true); 
  };

  const handleCloseAlert = () => {
    setShowAlert(false); 
  };

  return (
    <div>
      <h1>My Application</h1>
      <Button label="Open Alert" onClick={handleButtonClick} />
      
      {showAlert && (
        <Alert message="This is a red alert!" onClose={handleCloseAlert} />
      )}
    </div>
  );
};

export { App, App1, App2 };
