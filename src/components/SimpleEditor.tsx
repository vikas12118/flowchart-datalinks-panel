import React, { useState } from 'react';
import { Tooltip, Select, Icon } from '@grafana/ui';
import { StandardEditorProps } from '@grafana/data';

export const SimpleEditor = ({}: StandardEditorProps<boolean>) => {
  const option = [{ label: 'Main', value: 0 }];

  const [value, setValue] = useState<any>();
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div className="section gf-form-group" style={{ width: '100%' }}>
          <h5 className="section-heading" style={{ position: 'relative' }}>
            <span
              style={{ position: 'absolute', right: 0, top: -20 }}
              className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
            >
              <Tooltip placement="auto" theme="info" content="Define you flowchart">
                <Icon name="info-circle" />
              </Tooltip>
            </span>
          </h5>
          <div className="gf-form">
            <span className="gf-form-label width-12">
              Current flowchart
              <span className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left">
                <Tooltip placement="auto" theme="info" content="Current flowchart">
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </span>
            <div className="gf-form-select-wrapper width-12">
              {/* <Select
                options={option}
                value={value}
                allowCustomValue
                onCreateOption={customValue => {
                  setValue(customValue);
                } } 
                onChange={function (value: SelectableValue<any>, actionMeta: ActionMeta): void | {} {
                  throw new Error('Function not implemented.');
                } } 
                   /> */}

              <Select
                options={option}
                value={value}
                allowCustomValue
                onChange={(customValue) => {
                  setValue(customValue);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
