type HighlightTextProps = {
  text: string;
};

const HighlightText = ({ text }: HighlightTextProps) => {
  return <span className="rounded bg-yellow-200 px-1">{text}</span>;
};

export default HighlightText;
