import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bg from "./images/hand_bg.jpg";
import angryBg from "./images/angry_s.jpg";
import successBg from "./images/success.jpg";

function VerificationPage({ setIsVerified }) {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [showAngry, setShowAngry] = useState(false);
  const [showAngryImage, setShowAngryImage] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccessImage, setShowSuccessImage] = useState(false);

  const gfDob = "27-02-2005";
  const yourDob = "12-01-2024";
  const anniversary = "27-11-2023";

  // convert Date object into DD-MM-YYYY for comparison
  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleNext = () => {
    const formatted = formatDate(startDate);
    let isCorrect = false;

    if (step === 1 && formatted === gfDob) isCorrect = true;
    else if (step === 2 && formatted === yourDob) isCorrect = true;
    else if (step === 3 && formatted === anniversary) isCorrect = true;

    if (isCorrect) {
      setError("");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setShowSuccessImage(true);
        setTimeout(() => {
          setShowSuccessImage(false);
          if (step === 1) {
            setStep(2);
            setStartDate(null);
          } else if (step === 2) {
            setStep(3);
            setStartDate(null);
          } else if (step === 3) {
            sessionStorage.setItem("isVerified", "true");
            setIsVerified(true);
          }
        }, 1500);
      }, 2000);
    } else {
      setError("Correct ah enter panu chellameyyy !! 😜 ");
      setShowAngry(true);
      setTimeout(() => {
        setShowAngry(false);
        setShowAngryImage(true);
        setTimeout(() => setShowAngryImage(false), 1500);
      }, 2000);
    }
  };

  const getQuestion = () => {
    if (step === 1) return "Papa's Birthday 💕";
    if (step === 2) return "First Meet 💕";
    if (step === 3) return "Anniversary ❤️";
  };

  const getOverlayStyle = (isVisible, extraStyles = {}) => ({
    ...styles.overlay,
    ...extraStyles,
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transition: "opacity 0.8s ease-in-out, visibility 0.8s",
    pointerEvents: isVisible ? "auto" : "none",
  });

  return (
    <div style={styles.container} className="pointer-cursor">
      <style>
        {`
          .custom-date-input {
            display: block;
            padding: 10px;
            margin: 15px auto;
            width: 200px;
            background: rgba(255,255,255,0.95);
            color: #333;
            border: 1px solid rgba(0,0,0,0.12);
            border-radius: 6px;
            text-align: center;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
            -webkit-appearance: none;
            -moz-appearance: textfield;
          }

          .custom-date-input:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255,77,109,0.12);
          }

          /* Datepicker popup styling */
          .react-datepicker {
            background: rgba(255,255,255,0.98);
            color: #333;
            border-radius: 8px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.15);
            padding: 8px;
          }
          .react-datepicker__triangle {
            display: none;
          }
          .react-datepicker__header {
            background: linear-gradient(to right, #ffe6f0, #ffc2d1);
            border: none;
            color: #fff;
          }
          .react-datepicker__current-month,
          .react-datepicker__day-name {
            color: #fff;
          }
          .react-datepicker__day {
            color: #333;
          }
          .react-datepicker__day--selected,
          .react-datepicker__day--keyboard-selected {
            background-color: #ff4d6d !important;
            color: #fff !important;
          }
          .react-datepicker__day:hover {
            background-color: rgba(255,77,109,0.14);
          }
        `}
      </style>
      <div style={styles.card}>
        <div style={getOverlayStyle(showAngry)}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "red", marginBottom: "10px" }}>
              Un pechu Kaa, <br /> Thappa enter panita, <br /> Po Pesatha !{" "}
            </h2>
            <span style={{ fontSize: "80px" }}>😤</span>
          </div>
        </div>
        <div
          style={getOverlayStyle(showAngryImage, {
            backgroundImage: `url(${angryBg})`,
            backgroundSize: "100%",
            backgroundPosition: "top",
          })}
        />
        <div style={getOverlayStyle(showSuccess)}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#ff4d6d", marginBottom: "10px" }}>
              Correct Uh ! <br /> Intha Unaku Ummahhh ! 😘
            </h2>
            <span style={{ fontSize: "80px" }}>😘</span>
          </div>
        </div>
        <div
          style={getOverlayStyle(showSuccessImage, {
            backgroundImage: `url(${successBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          })}
        />
        <h2 style={{ marginBottom: "0px" }}>{getQuestion()}</h2>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd-MM-yyyy"
          placeholderText="Love You Chellam 📅"
          className="custom-date-input"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={30}
        />
        <br />
        <button
          onClick={handleNext}
          style={
            isHovered
              ? { ...styles.button, ...styles.buttonHover }
              : styles.button
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Click panu da thangamey 😘
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    // width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    padding: "40px 60px",
    // backgroundImage: `url(${name})`,
    background: "linear-gradient(to right, #ffe6f0, #ffc2d1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    position: "relative",
    /* if you prefer the card itself to tilt: uncomment below */
    // transform: "rotate(3deg)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    zIndex: 10,
  },
  button: {
    padding: "10px 20px",
    background: "#ff8fa3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
    width: "250px",
  },
  buttonHover: {
    background: "white",
    color: "#ff8fa3",
  },
};

export default VerificationPage;
