import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';
import { SimpleEditor } from './components/SimpleEditor';
import { DefinationEditor } from './components/DefinationEditor';
import { RuleMapping } from './components/RuleMapping';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addCustomEditor({
      id: 'Flowchart Edition',
      path: 'Flowchart Edition',
      name: 'Flowchart Edition',
      editor: SimpleEditor,
      category: ['Flowchart'],
    })
    .addCustomEditor({
      id: 'Definition',
      path: 'Definition',
      name: 'Definition',
      editor: DefinationEditor,
      category: ['Flowchart'],
    })
    .addCustomEditor({
      id: 'Mapping',
      path: 'Mapping',
      name: 'Mapping',
      editor: RuleMapping,
      category: ['Mapping'],
    });
});
