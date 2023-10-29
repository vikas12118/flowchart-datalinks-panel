// import React, { useState } from 'react';
import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { RuleView } from './RuleView';

export const RuleMapping = ({}: StandardEditorProps<boolean>) => {
  // const [count, setCount] = useState<Number>(1);
  return (
    <div>
      <RuleView />
      <div className="editor-row">
        <div className="gf-form-button-row">
          <button className="btn btn-inverse">
            <i className="fa fa-plus"></i>&nbsp;Add Rule
          </button>
        </div>
      </div>
    </div>
  );
};
