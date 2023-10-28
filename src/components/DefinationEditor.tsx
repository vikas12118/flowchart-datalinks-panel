import React, { useState } from 'react';
import { SelectableValue, StandardEditorProps } from '@grafana/data';
import { css } from '@emotion/css';
import { useStyles2, Select, Switch, Icon, Tooltip, ActionMeta } from '@grafana/ui';

const option = [
  { label: 'Dark', value: 0 },
  { label: 'Light', value: 1 },
  { label: 'Mobile', value: 2 },
  { label: 'Atlas', value: 3 },
];

const optionSourceType = [
  { label: 'XML', value: 0 },
  { label: 'CSV', value: 1 },
];

const getStyles = () => {
  return {
    align: css`
      vertical-align: top;
    `,
  };
};
export const DefinationEditor = ({ value, onChange }: StandardEditorProps<boolean>) => {
  const [url, setUrl] = useState<any>();
  const [isDownloadSource, setIsDownloadSource] = useState<any>(false);
  const [isScale, setIsScale] = useState<any>(false);
  const [sourceType, setSourceType] = useState<any>();
  const styles = useStyles2(getStyles);

  const setDownloadSource = () => {
    setIsDownloadSource(!isDownloadSource);
  };

  const setScale = () => {
    setIsScale(!isScale);
  };

  return (
    <div>
      <div className="gf-form">
        <label className="gf-form-switch-container">
          <div className="gf-form-label width-12">Download source</div>
          <div className="gf-form-switch ">
            {' '}
            <Switch value={isDownloadSource} onChange={setDownloadSource} />
          </div>
        </label>
      </div>
      {!isDownloadSource ? (
        <>
          <div className="gf-form">
            <label className="gf-form-label width-12" style={{ position: 'relative' }}>
              Editor Url &amp; Theme
              <span
                style={{ position: 'absolute', right: 6, top: 0 }}
                className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
              >
                <Tooltip
                  placement="auto"
                  theme="info"
                  content="Address and theme of editor when click on button edit draw"
                >
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </label>
            <input type="text" className="gf-form-input width-30" placeholder="https://draw.io" />
            <div className="gf-form-select-wrapper width-8">
              {/* <select className="gf-form-input">
            <option label="Dark" value="string:dark">
              Dark
            </option>
            <option label="Light" value="string:kennedy">
              Light
            </option>
            <option label="Mobile" value="string:minimal">
              Mobile
            </option>
            <option label="atlas" value="string:atlas">
              atlas
            </option>
          </select> */}
              <Select
                options={option}
                value={url}
                allowCustomValue
                onCreateOption={(customValue: any) => {
                  setUrl(customValue);
                }}
                onChange={function (value: SelectableValue<any>, actionMeta: ActionMeta): void | {} {
                  throw new Error('Function not implemented.');
                }}
              />
            </div>
          </div>
          <div className="gf-form">
            <label className="gf-form-label width-12" style={{ position: 'relative' }}>
              Source Type
              <span
                style={{ position: 'absolute', right: 6, top: 0 }}
                className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
              >
                <Tooltip
                  placement="auto"
                  theme="info"
                  content="Source of mxgraph definition (Xml definition, Url with xml result)"
                >
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </label>
            <div className="gf-form-select-wrapper width-12">
              <Select
                options={optionSourceType}
                value={sourceType}
                allowCustomValue
                onCreateOption={(customValue: any) => {
                  setSourceType(customValue);
                }}
                onChange={function (value: SelectableValue<any>, actionMeta: ActionMeta): void | {} {
                  throw new Error('Function not implemented.');
                }}
              />
            </div>
          </div>
          <div className="gf-form">
            <label className="gf-form-label width-12" style={{ position: 'relative' }}>
              Source Content
              <span
                style={{ position: 'absolute', right: 6, top: 0 }}
                className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
              >
                <Tooltip
                  placement="auto"
                  theme="info"
                  content="mxgraph model, edit on draw.io and select Extra menu > Edit Diagram"
                >
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </label>
            <div className="gf-form-select-wrapper width-12">
              <textarea
                name="options.source.xml.input"
                className="gf-form-input width:95%"
                placeholder="This text should respect xml/plain mxgraph syntax"
                style={{ marginTop: 0, marginBottom: 0, height: '145', lineHeight: 'normal' }}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="gf-form">
            <label className="gf-form-label width-12" style={{ position: 'relative' }}>
              Source Type
              <span
                style={{ position: 'absolute', right: 6, top: 0 }}
                className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
              >
                <Tooltip
                  placement="auto"
                  theme="info"
                  content="Source of mxgraph definition (Xml definition, Url with xml result)"
                >
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </label>
            <div className="gf-form-select-wrapper width-12">
              <Select
                options={optionSourceType}
                value={sourceType}
                allowCustomValue
                onCreateOption={(customValue: any) => {
                  setSourceType(customValue);
                }}
                onChange={function (value: SelectableValue<any>, actionMeta: ActionMeta): void | {} {
                  throw new Error('Function not implemented.');
                }}
              />
            </div>
          </div>

          <div className="gf-form">
            <label className="gf-form-label width-12" style={{ position: 'relative' }}>
              URL
              <span
                style={{ position: 'absolute', right: 6, top: 0 }}
                className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
              >
                <Tooltip
                  placement="auto"
                  theme="info"
                  content="This service should respond with a xml/plain response containing mxgraph syntax"
                >
                  <Icon name="info-circle" />
                </Tooltip>
              </span>
            </label>
            <input type="text" className="gf-form-input width-38" placeholder="https://draw.io" />
          </div>
        </>
      )}

      <div
        style={{
          alignContent: 'flex-start',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}
      >
        <div className="gf-form" style={{ marginRight: '5px' }}>
          <button className="btn btn-secondary btn-small">
            <i style={{ marginRight: 5 }} className="fa fa-edit pointer"></i> Edit Draw
            <Tooltip placement="auto" theme="info" content="Open Graph in draw.io Help Example">
              <Icon style={{ marginLeft: '10' }} name="info-circle" />
            </Tooltip>
          </button>
        </div>
        <div className="gf-form" style={{ marginRight: '5px' }}>
          <button className="btn btn-secondary btn-small">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAxklEQVQokZWQMUpDURREzzw+kiKIlaWksnIPWttaCkFXkDWI63AFVtmApXswiFjY2IpIIOEdi7xC0PfBud29M3OZiUgXMgH21JpkTdiWEfIA3KhLYAmctf3I6Lm6cYcrm8vfD6oz5DrJC3AAVKAvAG6THAEX6n6SD4D8Ci3HwLQ5fhKef56HRjpRp0m+1LskK8JlpwxR5+q7+qTe11pnvSIGALUkOWzhFil57QUrAEne1AfgUT0day8iVkuSSTPYEtajgv/gG3TbgAtdLpuZAAAAAElFTkSuQmCC" />
            Prettify
            <Tooltip placement="auto" theme="info" content="Format XML code to display or modify Help">
              <Icon style={{ marginLeft: '10' }} name="info-circle" />
            </Tooltip>
          </button>
        </div>
        <div className="gf-form" style={{ marginRight: '5px' }}>
          <button className="btn btn-secondary btn-small">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAzElEQVQokYWSvUoDYRREzywfS9jCInYWeTILSytRH0CwshUtbHwD38xCQSGIP/dYZINBN2Zu8RV3+Dgz3Ij8K2nAnPAI0O0wd8AhcIUcALRJX3mSZB94Bc7U+yQv4ycToxdV9aE+q7fqsN5NIqkkacAesATe1ru2EewUGEYzwPWY8XN86wdJO/VO/XKlS7Wvqr6q+k3cdeimPiVZAgMA4T3kD25DZsAxcKTeJJmP7WypWhfqg3qu9iNem2wPVxmqaqHOtpk2JztP45e+AdC7pvsVKoFjAAAAAElFTkSuQmCC" />
            Minify
          </button>
        </div>
        <div className="gf-form" style={{ marginRight: '5px' }}>
          <button className="btn btn-secondary btn-small">
            <i className="fas fa-compress-arrows-alt pointer"></i> Compress/Encode
            <Tooltip placement="auto" theme="info" content="Zip XML definition for big XML Help">
              <Icon style={{ marginLeft: '10' }} name="info-circle" />
            </Tooltip>
          </button>
        </div>
        <div className="gf-form" style={{ marginRight: '5px' }}>
          <button className="btn btn-secondary btn-small">
            <i className="fas expand-arrows-alt pointer"></i> Extract/Decode
            <Tooltip placement="auto" theme="info" content="Extract xml from content when compressed Help">
              <Icon style={{ marginLeft: '10' }} name="info-circle" />
            </Tooltip>
          </button>
        </div>
      </div>

      <div className={styles.align} style={{ marginBottom: '40px' }}>
        <div>
          <h5 className="width-16" style={{ display: 'flex', justifyContent: 'space-between' }}>
            Advanced Display
            <Tooltip placement="auto" theme="info" content="Change display graph options">
              <Icon name="info-circle" />
            </Tooltip>
          </h5>

          <div className="gf-form">
            <label className="gf-form-switch-container">
              <div className="gf-form-label width-12">Scale</div>
              <div className="gf-form-switch ">
                {' '}
                <Switch value={isScale} onChange={setScale} />
              </div>
            </label>
          </div>
          <div className="gf-form">
            <label className="gf-form-switch-container">
              <div className="gf-form-label width-12">Center</div>
              <div className="gf-form-switch ">
                {' '}
                <Switch />
              </div>
            </label>
          </div>
          <div className="gf-form">
            <label className="gf-form-switch-container">
              <div className="gf-form-label width-12">Grid</div>
              <div className="gf-form-switch ">
                {' '}
                <Switch />
              </div>
            </label>
          </div>
          <div className="gf-form">
            <label className="gf-form-switch-container">
              <div className="gf-form-label width-12">Bg Color</div>
              <div className="gf-form-switch ">
                {' '}
                <Switch />
              </div>
            </label>
          </div>

          {isScale ? (
            <div className="gf-form">
              <label className="gf-form-label width-12" style={{ position: 'relative' }}>
                Zoom
                <span
                  style={{ position: 'absolute', right: 6, top: 0 }}
                  className="gf-form-help-icon gf-form-help-icon--right-normal drop-help drop-hide-out-of-bounds drop-target drop-element-attached-middle drop-target-attached-middle drop-element-attached-right drop-target-attached-left"
                >
                  <Tooltip
                    placement="auto"
                    theme="info"
                    content="Zoom graph, if scale is unchecked. if < 100% : reduce graph, >100% increase graph"
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                </span>
              </label>
              <input type="text" className="gf-form-input width-38" placeholder="100%" />
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.align} style={{ marginBottom: '40px' }}>
        <h5 className="width-16" style={{ display: 'flex', justifyContent: 'space-between' }}>
          Others options
          <Tooltip placement="auto" theme="info" content="Change options in graph">
            <Icon name="info-circle" />
          </Tooltip>
        </h5>

        <div className="gf-form">
          <label className="gf-form-switch-container">
            <div className="gf-form-label width-12">Lock </div>
            <div className="gf-form-switch ">
              {' '}
              <Switch />
            </div>
          </label>
        </div>
        <div className="gf-form">
          <label className="gf-form-switch-container">
            <div className="gf-form-label width-12">
              Allow draw.io source
              <Tooltip placement="auto" theme="info" content="Allow draw.io source">
                <Icon name="info-circle" />
              </Tooltip>
            </div>
            <div className="gf-form-switch ">
              {' '}
              <Switch />
            </div>
          </label>
        </div>
        <div className="gf-form">
          <label className="gf-form-switch-container">
            <div className="gf-form-label width-12">
              Enable animation
              <Tooltip
                placement="auto"
                theme="info"
                content="Enable animation in flowcharting like fade colors, disable it if you use 'Direct link rendered image' in share panel options for a best rendered or best performance"
              >
                <Icon name="info-circle" />
              </Tooltip>
            </div>
            <div className="gf-form-switch ">
              {' '}
              <Switch />
            </div>
          </label>
        </div>
        <div className="gf-form">
          <label className="gf-form-switch-container">
            <div className="gf-form-label width-12">
              Tooltip
              <Tooltip placement="auto" theme="info" content="Enable tooltip">
                <Icon name="info-circle" />
              </Tooltip>
            </div>
            <div className="gf-form-switch ">
              {' '}
              <Switch />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
