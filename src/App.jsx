import { useEffect, useState } from "react";
import VerificationPage from "./VerificationPage";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem("isVerified");
    if (verified === "true") {
      setIsVerified(true);
    }
  }, []);

  return (
    <>
      {isVerified ? (
        <Dashboard />
      ) : (
        <VerificationPage setIsVerified={setIsVerified} />
      )}
    </>
  );
}

export default App;
