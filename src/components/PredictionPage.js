import React, { useState } from "react";
import styled from "styled-components";
import Service from "./Service";
import { useNavigate } from "react-router-dom";

const StyledPredictionPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const StyledTableHead = styled.th`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
`;

const StyledTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const StyledQuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledHeading = styled.h2`
  color: #3498db;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 5px;
  width: 100%;
`;

const StyledSelect = styled.select`
  padding: 10px;
  margin: 5px;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const StyledResultContainer = styled.div`
  margin-top: 20px;
`;

function convertKeys(inputObject) {
  const keyMappings = {
    "Do you have high blood pressure?": "HighBP",
    "Do you have high cholesterol?": "HighChol",
    "Have you had a cholesterol check in the last 5 years?": "CholCheck",
    "What is your BMI (Body Mass Index)?": "BMI",
    "Have you ever smoked at least 100 cigarettes in your entire life?":
      "Smoker",
    "Have you had a stroke?": "Stroke",
    "Have you ever been diagnosed with coronary heart disease (CHD) or had a heart attack?":
      "HeartDiseaseorAttack",
    "Have you engaged in physical activity in the past 30 days (not including your job)?":
      "PhysActivity",
    "Do you consume fruits 1 or more times per day?": "Fruits",
    "Do you consume vegetables 1 or more times per day?": "Veggies",
    "Are you considered a heavy drinker (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)?":
      "HvyAlcoholConsump",
    "Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMO, etc.?":
      "AnyHealthcare",
    "Was there a time in the past 12 months when you needed to see a doctor but could not because of cost?":
      "NoDocbcCost",
    "How would you rate your general health on a scale of 1-5?": "GenHlth",
    "For how many days during the past 30 days was your mental health not good?":
      "MentHlth",
    "For how many days during the past 30 days was your physical health not good?":
      "PhysHlth",
    "Do you have serious difficulty walking or climbing stairs?": "DiffWalk",
    "Are you female or male?": "Sex",
    "In which age category do you fall?": "Age",
    "What is your highest education level?": "Education",
    "What is your annual income?": "Income",
  };

  const convertedObject = {};

  for (const [question, answer] of Object.entries(inputObject)) {
    const mappedKey = keyMappings[question];
    if (mappedKey) {
      convertedObject[mappedKey] = answer;
    }
  }

  return convertedObject;
}

const PredictionPage = () => {
  const navigate = useNavigate();
  let outputVale = "null";
  let abc;
  const [formData, setFormData] = useState({
    HighBP: "",
    HighChol: "",
    CholCheck: "",
    BMI: "",
    Smoker: "",
    Stroke: "",
    HeartDiseaseorAttack: "",
    PhysActivity: "",
    Fruits: "",
    Veggies: "",
    HvyAlcoholConsump: "",
    AnyHealthcare: "",
    NoDocbcCost: "",
    GenHlth: "",
    MentHlth: "",
    PhysHlth: "",
    DiffWalk: "",
    Sex: "",
    Age: "",
    Education: "",
    Income: "",
  });

  const [predictionResult, setPredictionResult] = useState(null);
  const [numericalResult, setNumericalResult] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [showResult, setShowResult] = useState({});
  const [error, setError] = useState(null);

  const questions = [
    "Do you have high blood pressure?",
    "Do you have high cholesterol?",
    "Have you had a cholesterol check in the last 5 years?",
    "What is your BMI (Body Mass Index)?",
    "Have you ever smoked at least 100 cigarettes in your entire life?",
    "Have you had a stroke?",
    "Have you ever been diagnosed with coronary heart disease (CHD) or had a heart attack?",
    "Have you engaged in physical activity in the past 30 days (not including your job)?",
    "Do you consume fruits 1 or more times per day?",
    "Do you consume vegetables 1 or more times per day?",
    "Are you considered a heavy drinker (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)?",
    "Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMO, etc.?",
    "Was there a time in the past 12 months when you needed to see a doctor but could not because of cost?",
    "How would you rate your general health on a scale of 1-5?",
    "For how many days during the past 30 days was your mental health not good?",
    "For how many days during the past 30 days was your physical health not good?",
    "Do you have serious difficulty walking or climbing stairs?",
    "Are you female or male?",
    "In which age category do you fall?",
    "What is your highest education level?",
    "What is your annual income?",
  ];

  const answerChoices = [
    ["No", "Yes"], // Question 1
    ["No", "Yes"], // Question 2
    ["No", "Yes"], // Question 3
    [], // Question 4 (BMI)
    ["No", "Yes"], // Question 5
    ["No", "Yes"], // Question 6
    ["No", "Yes"], // Question 7
    ["No", "Yes"], // Question 8
    ["No", "Yes"], // Question 9
    ["No", "Yes"], // Question 10
    ["No", "Yes"], // Question 11
    ["No", "Yes"], // Question 12
    ["No", "Yes"], // Question 13
    ["1", "2", "3", "4", "5"], // Question 14
    [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ], // Question 15
    [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ], // Question 16
    ["No", "Yes"], // Question 17
    ["Female", "Male"], // Question 18
    [
      "18 - 24",
      "25 - 29",
      "30 - 34",
      "35 - 39",
      "40 - 44",
      "45 - 49",
      "50 - 54",
      "55 - 59",
      "60 - 64",
      "65 - 69",
      "70 - 74",
      "75 - 79",
      "80 or older",
      "Missing values",
    ], // Question 19
    [
      "Never attended school or only kindergarten",
      "Grades 1 through 8 (Elementary)",
      "Grades 9 through 11 (Some high school)",
      "Grade 12 or GED (High school graduate)",
      "College 1 year to 3 years (Some college or technical school)",
      "College 4 years or more (College graduate)",
    ], // Question 20
    [
      "Less than $10,000",
      "Less than $15,000",
      "Less than $20,000",
      "Less than $25,000",
      "Less than $35,000",
      "Less than $50,000",
      "Less than $75,000",
      "More than $75,000",
    ], // Question 21
  ];

  const handleAnswer = (answer, questionIndex) => {
    setFormData({ ...formData, [questions[questionIndex]]: answer });
  };

  const handleSubmit = () => {
    // Check if any question is not answered
    const unansweredQuestion = questions.find(
      (question) => !formData[question]
    );

    if (unansweredQuestion) {
      setError(`Please answer the question: "${unansweredQuestion}"`);
      return;
    }
    // Remove unnecessary keys (questions) from formData
    const {
      HighBP,
      HighChol,
      CholCheck,
      BMI,
      Smoker,
      Stroke,
      HeartDiseaseorAttack,
      PhysActivity,
      Fruits,
      Veggies,
      HvyAlcoholConsump,
      AnyHealthcare,
      NoDocbcCost,
      GenHlth,
      MentHlth,
      PhysHlth,
      DiffWalk,
      Sex,
      Age,
      Education,
      Income,
      ...result
    } = formData;
    //  console.log(formData);
    // console.log("ab");
    //console.log(result);
    setShowResult(result);
    // console.log(showResult);
    // Convert keys and set the cleaned result to predictionResult state
    setPredictionResult(convertKeys(result));
    setError(null); // Reset error state
  };
  const convertToNumerical = (data) => {
    const numericalData = { ...data };

    // Convert yes/no values to 0 or 1
    const binaryConversion = (value) => {
      if (typeof value === "string") {
        return value.toLowerCase() === "yes" ? 1 : 0;
      }
      return value; // If not a string, return the original value
    };

    // Map for GenHlth
    const genHlthMap = {
      1: 1, // excellent
      2: 2, // very good
      3: 3, // good
      4: 4, // fair
      5: 5, // poor
    };

    // Map for Sex
    const sexMap = {
      female: 0,
      male: 1,
    };

    // Map for Age
    const ageMap = {
      "18 - 24": 1,
      "25 - 29": 2,
      "30 - 34": 3,
      "35 - 39": 4,
      "40 - 44": 5,
      "45 - 49": 6,
      "50 - 54": 7,
      "55 - 59": 8,
      "60 - 64": 9,
      "65 - 69": 10,
      "70 - 74": 11,
      "75 - 79": 12,
      "80 or older": 13,
    };

    // Map for Education
    const educationMap = {
      "never attended school or only kindergarten": 1,
      "grades 1 through 8 (elementary)": 2,
      "grades 9 through 11 (some high school)": 3,
      "grade 12 or GED (high school graduate)": 4,
      "college 1 year to 3 years (some college or technical school)": 5,
      "college 4 years or more (college graduate)": 6,
    };

    // Map for Income
    const incomeMap = {
      "less than $10,000": 1,
      "less than $15,000": 2,
      "less than $20,000": 3,
      "less than $25,000": 4,
      "less than $35,000": 5,
      "less than $50,000": 6,
      "less than $75,000": 7,
      "more than $75,000": 8,
    };

    // Convert BMI to a number
    numericalData.BMI = parseFloat(numericalData.BMI);

    // Convert MentHlth and PhysHlth to numbers
    numericalData.MentHlth = parseInt(numericalData.MentHlth, 10);
    numericalData.PhysHlth = parseInt(numericalData.PhysHlth, 10);

    // Apply conversions
    numericalData.GenHlth = genHlthMap[numericalData.GenHlth];
    numericalData.Sex = sexMap[numericalData.Sex.toLowerCase()];
    numericalData.Age = ageMap[numericalData.Age.toLowerCase()];
    numericalData.Education =
      educationMap[numericalData.Education.toLowerCase()];
    numericalData.Income = incomeMap[numericalData.Income.toLowerCase()];

    // Convert yes/no values to 0 or 1 for other fields
    Object.keys(numericalData).forEach((key) => {
      if (key !== "MentHlth" && key !== "PhysHlth") {
        numericalData[key] = binaryConversion(numericalData[key]);
      }
    });

    abc = numericalData;
    return numericalData;
  };

  const postDiabetesHandler = () => {
    const convert = async () => {
      JSON.stringify(convertToNumerical(predictionResult), null, 2);
    };
    convert();
    const postDiabetes = async () => {
      try {
        const response = await Service.postRequest(abc, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // console.log(JSON.stringify(abc));
        // console.log(response.data.predicted_class);
        if (response.data.predicted_class == 0) {
          //  outputVale = "no diabetes";
          setShowMessage("no diabetes");
        } else if (response.data.predicted_class == 1) {
          //  outputVale = "pre diabetes";
          setShowMessage("pre diabetes");
        } else if (response.data.predicted_class == 2) {
          //  outputVale = "diabetes";
          setShowMessage("diabetes");
        }
        console.log(
          JSON.stringify(convertToNumerical(predictionResult), null, 2)
        );
      } catch (error) {
        console.log(error);
        console.log("error");
      }
    };
    postDiabetes();
  };

  const handleDetailsClick = (resultType) => {
    // Navigate based on the result type
    navigate(`/${resultType.toLowerCase().replace(" ", "-")}`);
  };
  // console.log(showResult);
  return (
    <StyledPredictionPage>
      <div>
        {predictionResult ? (
          <StyledResultContainer>
            <div>
              <StyledTable>
                <thead>
                  <tr>
                    <StyledTableHead>Question</StyledTableHead>
                    <StyledTableHead>Answer</StyledTableHead>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(showResult).map(([question, answer]) => (
                    <tr key={question}>
                      <StyledTableCell>{question}</StyledTableCell>
                      <StyledTableCell>{answer}</StyledTableCell>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
              <br />
              <hr />
              <div>
                <StyledButton onClick={postDiabetesHandler}>
                  show Result
                </StyledButton>
                <hr />
              </div>
              {/* <pre>{showMessage}</pre> */}
              {showMessage === "no diabetes" && (
                <div>
                  <p>No diabetes</p>
                  <StyledButton onClick={() => navigate("/diabetes-stages")}>
                    More details about diabetes
                  </StyledButton>
                </div>
              )}
              {showMessage === "pre diabetes" && (
                <div>
                  <p>Pre diabetes</p>
                  <StyledButton onClick={() => navigate("/pre-diabetes")}>
                    More details about pre-diabetes
                  </StyledButton>
                </div>
              )}
              {showMessage === "diabetes" && (
                <div>
                  <p>Diabetes</p>
                  <StyledButton onClick={() => navigate("/diabetes")}>
                    More details about diabetes
                  </StyledButton>
                </div>
              )}
            </div>
          </StyledResultContainer>
        ) : (
          <div>
            {questions.map((question, index) => (
              <StyledQuestionContainer key={index}>
                <StyledHeading>{question}</StyledHeading>
                {index === 3 ? (
                  <StyledInput
                    type="number"
                    placeholder="30"
                    value={formData[question]}
                    onChange={(e) => handleAnswer(e.target.value, index)}
                    required
                  />
                ) : (
                  <StyledSelect
                    onChange={(e) => handleAnswer(e.target.value, index)}
                    required
                  >
                    <option value="" disabled selected>
                      Select an answer
                    </option>
                    {answerChoices[index].map((choice, choiceIndex) => (
                      <option key={choiceIndex} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </StyledSelect>
                )}
              </StyledQuestionContainer>
            ))}
            <StyledButton onClick={handleSubmit}>
              Submit the Answers
            </StyledButton>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
        )}
      </div>
    </StyledPredictionPage>
  );
};

export default PredictionPage;
