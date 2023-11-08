import React, { useState } from 'react';
import { StandardEditorProps } from '@grafana/data';
import { RuleView } from './RuleView';

export const RuleMapping = ({}: StandardEditorProps<boolean>) => {
  const [counters, setCounters] = useState<React.JSX.Element[]>([<RuleView key={0} ruleNo={1} />]);

  const addCounter = () => {
    const newKey = counters.length;
    const newRuleNo = counters.length > 0 ? counters.length + 1 : 1;
    const newCounter = <RuleView key={newKey} ruleNo={newRuleNo} />;
    setCounters([...counters, newCounter]);
  };

  const cloneCounter = (index: number) => {
    const clonedCounter = <RuleView key={counters.length} ruleNo={counters.length + 1} />;
    const updatedCounters = [...counters.slice(0, index + 1), clonedCounter, ...counters.slice(index + 1)];

    // Reassign ruleNo for all components
    const reindexedCounters = updatedCounters.map((counter, i) => {
      return React.cloneElement(counter as React.ReactElement, { key: i, ruleNo: i + 1 });
    });

    setCounters(reindexedCounters);
  };

  const removeCounter = (index: number) => {
    const updatedCounters = counters.filter((_, i) => i !== index);

    // Reassign ruleNo for all remaining components
    const reindexedCounters = updatedCounters.map((counter, i) => {
      return React.cloneElement(counter as React.ReactElement, { key: i, ruleNo: i + 1 });
    });

    setCounters(reindexedCounters);
  };

  const moveCounter = (index: number, direction: 'up' | 'down') => {
    const updatedCounters = [...counters];

    if (direction === 'up' && index > 0) {
      const temp = updatedCounters[index];
      updatedCounters[index] = updatedCounters[index - 1];
      updatedCounters[index - 1] = temp;
    } else if (direction === 'down' && index < counters.length - 1) {
      const temp = updatedCounters[index];
      updatedCounters[index] = updatedCounters[index + 1];
      updatedCounters[index + 1] = temp;
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
          <button onClick={() => cloneCounter(index)}>Clone</button>
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
