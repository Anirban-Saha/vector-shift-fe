import { Button } from './ui/button';

// eslint-disable-next-line react/prop-types
export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Button
      variant="ghost"
      className="border-solid "
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        justifyContent: 'center',
        paddingVertical: '16px',
        lineHeight: '1',
        borderWidth: '1px',
      }}
      draggable
    >
      <p>{label}</p>
    </Button>
  );
};
