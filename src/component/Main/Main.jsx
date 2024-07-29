/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
  const {
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
  } = useContext(Context);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onsent();
    }
  };
  const senddata = (i) => {
    setinput(i);
    onsent();
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  senddata(
                    "Suggest beautiful places to see on an upcomming road trip"
                  )
                }
              >
                <p>Suggest beautiful places to see on an upcomming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() =>
                  senddata("Briefly summarize this concept: urban planing")
                }
              >
                <p>Briefly summarize this concept: urban planing</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() =>
                  senddata(
                    "BrainStorm team bonding activities for our work retreat"
                  )
                }
              >
                <p>BrainStorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div
                className="card"
                onClick={() =>
                  senddata("Improve the readability of the following codes")
                }
              >
                <p>Improve the readability of the following codes</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentprompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}>
                  {/* {resultData} */}
                </p>
              )}
            </div>
          </div>
        )}

        <dev className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              onChange={(e) => setinput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  src={assets.send_icon}
                  alt=""
                  onClick={() => onsent()}
                  onKeyDown={handleKeyPress}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people,so
            double-check in responses, Your privacy and Gemini Apps
          </p>
        </dev>
      </div>
    </div>
  );
};

export default Main;
