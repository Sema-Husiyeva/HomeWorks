import axios from "axios";

const API = axios.create({
  baseURL: "https://quizapi.io/api/v1",
  headers: {
    "X-Api-Key": "Pju8giOHJAXHbStufPtca8Z9HAfQvDIS1Gr0TvO2",
  },
});

export const fetchQuestions = (category: string) => {
  return API.get("/questions", {
    params: {
      category: category.toLowerCase(),
      difficulty: "easy",
      limit: 10,
    },
  });
};
