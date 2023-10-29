import React, { useState } from 'react';
// import { StandardEditorProps } from '@grafana/data';
import { Select } from '@grafana/ui';

const aggregationOption = [
  { label: 'First', value: 0 },
  { label: 'First (not null)', value: 1 },
  { label: 'Last', value: 2 },
  { label: 'Last (not null)', value: 3 },
  { label: 'Min', value: 4 },
  { label: 'Max', value: 5 },
  { label: 'Sum', value: 6 },
  { label: 'Avg', value: 7 },
  { label: 'Count', value: 8 },
  { label: 'Delta', value: 9 },
  { label: 'Range', value: 10 },
  { label: 'Diff', value: 11 },
  { label: 'Time of last point', value: 12 },
];

const typeOption = [
  { label: 'Number', value: 0 },
  { label: 'String', value: 1 },
  { label: 'Date', value: 2 },
];

const unitOption = [
  { label: 'Misc', value: 0 },
  { label: 'Acceleration', value: 1 },
  { label: 'Angle', value: 2 },
  { label: 'Area', value: 3 },
  { label: 'Computation', value: 4 },
  { label: 'Concentration', value: 5 },
  { label: 'Currency', value: 6 },
  { label: 'Data', value: 7 },
  { label: 'Data rate', value: 8 },
];

export const RuleView = ({}) => {
  const [settingEnabled, setSettingEnabled] = useState<boolean>(false);
  const [aggregation, setAggregation] = useState<any>();
  const [type, setType] = useState<any>();
  const [unit, setUnit] = useState<any>();
  const setSetting = () => {
    setSettingEnabled(!settingEnabled);
  };
  return (
    <div className="editor-row">
      <div style={{backgroundColor: 'black', color: 'white', marginBottom: '20px'}}>
        <div className="rule-item" onMouseOver={() => {}} onMouseLeave={() => {}}>
          <div id="left" style={{ float: 'left', width: '30%' }} onClick={setSetting}>
            <span className="rule-extend">
              <i className={`fa ${!settingEnabled ? 'fa-chevron-right' : 'fa-chevron-down'}`}></i>
            </span>
            <span className="rule-title">1 : Rule [myRule]</span>
          </div>
          <div id="center" style={{ display: 'inline-block', margin: '0 auto', width: '50%' }}>
            <div style={{ display: 'inline-block', marginRight: '5px' }}>
              <span>Last state level : [-1]</span>
            </div>
            <div style={{ display: 'inline-block', marginRight: '5px' }}>
              <span>Raw value : []</span>
            </div>
            <div style={{ display: 'inline-block', marginRight: '5px' }}>
              <span>Formatted value : []</span>
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
              <div style={{ display: 'inline-block', marginRight: '5px' }}>
                <span>color : []</span>
              </div>
              <div style={{ display: 'inline-block', marginRight: '5px' }}>
                <span>Execute time : [0.00 ms]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {settingEnabled ? (
        <>
          <div className="section gf-form-group">
            <h5 className="section-heading">Options</h5>
            <div className="gf-form">
              <label className="gf-form-label width-10">Rule name</label>
              <input
                type="text"
                className="gf-form-input width-12 ng-pristine ng-untouched ng-valid ng-not-empty"
                placeholder="Name of this rule"
              />
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10">Apply to metrics</label>
              <input
                type="text"
                placeholder="Name or regex of metric"
                className="gf-form-input width-12 ng-pristine ng-untouched ng-valid ng-not-empty"
                data-min-length="0"
                data-items="100"
                data-placement="right"
                data-provide="typeahead"
              />
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10">Aggregation</label>
              <div className="gf-form-select-wrapper width-12">
                <Select
                  options={aggregationOption}
                  value={aggregation}
                  allowCustomValue
                  onChange={(customValue) => {
                    console.log('customValue', customValue.label);
                    setAggregation(customValue.label);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="section gf-form-group">
            <h5 className="section-heading">Type</h5>
            <div className="gf-form">
              <label className="gf-form-label width-10">Type</label>
              <Select
                options={typeOption}
                value={type}
                allowCustomValue
                onChange={(customValue) => {
                  console.log('customValue', customValue.label);
                  setType(customValue.label);
                }}
              />
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10">Unit</label>
              <Select
                options={unitOption}
                value={unit}
                allowCustomValue
                onChange={(customValue) => {
                  console.log('customValue', customValue.label);
                  setUnit(customValue.label);
                }}
              />
            </div>
            <div className="gf-form">
              <label className="gf-form-label width-10">Decimals</label>
              <input type="number" className="gf-form-input width-12 ng-pristine ng-untouched ng-valid ng-not-empty" />
            </div>
          </div>
          <div className="section gf-form-group">
            <h5 className="section-heading">Thresholds (2 : Critical &gt; ... &gt; 0 : Ok)</h5>
            <table>
              <thead>
                <tr>
                  <th>
                    <label className="gf-form-label width-5" style={{ marginRight: '2px' }}>
                      Buttons
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-5" style={{ marginRight: '2px' }}>
                      Color
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-8" style={{ marginRight: '2px' }}>
                      Number
                    </label>
                  </th>
                  <th>
                    <label className="gf-form-label width-3" style={{ marginRight: '2px' }}>
                      Lvl
                    </label>
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
              <tfoot>
                <tr></tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};
