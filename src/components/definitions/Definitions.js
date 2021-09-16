import React from "react";
import "./Definitions.scss";
const Definitions = ({ word, category, meanings, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroungColor: "#fff", borderRadius: "10" }}
          controls
        >
          Your Browser doesn't support it
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>(
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{ backgroungColor: lightMode?"#3b5360":"white", color: lightMode?"black":"white" }}
              >
                <b>{def.definitions}</b>
                <hr style={{ backgroungColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        ))
      )}
    </div>
  );
};

export default Definitions;
