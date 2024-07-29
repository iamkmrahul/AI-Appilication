import { createContext, useState } from "react";
import run from "../config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {
  // eslint-disable-next-line no-unused-vars

  const [input, setinput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  const [prevprompt, setprevprompt] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setResultData] = useState("");
  const delayPara = (index, nextword) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextword);
    }, 75 * index);
  };
  const newchat = () => {
    setloading(false);
    setshowResult(false);
  };
  const onsent = async (prompt) => {
    setResultData("");
    setloading(true);
    setshowResult(true);

    if (prompt != undefined) {
      setinput(prompt);
    } else {
      setrecentprompt(input);
      setprevprompt((prev) => [...prev, input]);
    }

    const response = await run(input);
    let responseArray = response.split("**");
    let newresponse;
    for (let i = 0; i < responseArray.length; i++) {
      if (i == 0 || i % 2 != 1) {
        newresponse += responseArray[i];
      } else {
        newresponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newresponse2 = newresponse.split("*").join("</br>");
    let newresponseArray = newresponse2.split(" ");
    for (let i = 0; i < newresponseArray.length; i++) {
      const nextword = newresponseArray[i];
      delayPara(i, nextword + " ");
    }
    // setResultData(newresponse2);
    setloading(false);
    setinput("");
  };
  // onsent("what is  react");
  const contextvalue = {
    prevprompt,
    setprevprompt,
    onsent,
    recentprompt,
    setrecentprompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
    newchat,
  };
  return (
    <Context.Provider value={contextvalue}> {props.children}</Context.Provider>
  );
};

export default ContextProvider;
