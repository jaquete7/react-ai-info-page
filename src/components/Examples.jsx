import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  /* useState hook returns an array with 2 values, which we can use JS de-structuring to get the two values separately */
  /*First value is the fist state of the data.'Please click a button' and the second value is a function that  is provided 
    to update the component when needed and update the first variable*/
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "neuralNetworks"}
              onSelect={() => handleSelect("neuralNetworks")}
            >
              Neural Networks
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "machineLearning"}
              onSelect={() => handleSelect("machineLearning")}
            >
              {" "}
              Machine Learning{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "deepLearning"}
              onSelect={() => handleSelect("deepLearning")}
            >
              {" "}
              Deep Learning{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "naturalLanguageProcessing"}
              onSelect={() => handleSelect("naturalLanguageProcessing")}
            >
              {" "}
              Natural Lenguage Processing{" "}
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
