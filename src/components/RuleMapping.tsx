import React, { useState } from 'react';
import { StandardEditorProps } from '@grafana/data';
import { RuleView } from './RuleView';

export const RuleMapping = ({}: StandardEditorProps<boolean>) => {
  const [counters, setCounters] = useState<React.JSX.Element[]>([<RuleView key={0} ruleNo={1} />]);

  const addCounter = () => {
    const newKey = counters.length;
    const newCounter = <RuleView key={newKey} ruleNo={newKey + 1} />;
    setCounters([...counters, newCounter]);
  };

  const removeCounter = (index: number) => {
    const updatedCounters = counters.filter((_, i) => i !== index);
    setCounters(updatedCounters);
  };

  const moveCounter = (index: number, direction: 'up' | 'down') => {
    const updatedCounters = [...counters];

    if (direction === 'up' && index > 0) {
      const temp = updatedCounters[index - 1];
      updatedCounters[index - 1] = updatedCounters[index];
      updatedCounters[index] = temp;
    } else if (direction === 'down' && index < counters.length - 1) {
      const temp = updatedCounters[index + 1];
      updatedCounters[index + 1] = updatedCounters[index];
      updatedCounters[index] = temp;
    }

    setCounters(updatedCounters);
  };

  return (
    <div>
      {counters.map((counter, index) => (
        <div key={index}>
          {counter}
          <button onClick={() => removeCounter(index)}>Remove</button>
          {index === 0 && counters.length > 1 && <button onClick={() => moveCounter(index, 'down')}>Down</button>}
          {index > 0 && index < counters.length - 1 && (
            <>
              <button onClick={() => moveCounter(index, 'up')}>Up</button>
              <button onClick={() => moveCounter(index, 'down')}>Down</button>
            </>
          )}
          {index === counters.length - 1 && counters.length > 1 && (
            <button onClick={() => moveCounter(index, 'up')}>Up</button>
          )}
        </div>
      ))}

      <div className="editor-row">
        <div className="gf-form-button-row">
          <button className="btn btn-inverse" onClick={addCounter}>
            <i className="fa fa-plus"></i>&nbsp;Add Rule
          </button>
        </div>
      </div>
    </div>
  );
};

export default RuleMapping;
