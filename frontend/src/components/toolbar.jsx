import { ModeToggle } from './mode-toggler';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  const nodes = [
    {
      type: 'customInput',
      label: 'Input',
    },
    { type: 'text', label: 'Text' },
    { type: 'llm', label: 'LLM' },
    {
      type: 'customOutput',
      label: 'Output',
    },
  ];

  return (
    <div className="p-4 ">
      <div className="mt-1 flex flex-wrap gap-4 ml-8">
        {nodes.map((node, index) => (
          <DraggableNode key={index} type={node.type} label={node.label} />
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};
