import "./EmotionCard.css";

interface Props {
  emotion: string;
  confidence: number;
}

const EmotionCard: React.FC<Props> = ({ emotion, confidence }) => {
  return (
    <div className="emotion-card">
      <h2>Detected Emotion: {emotion}</h2>
      <p>Confidence: {(confidence * 100).toFixed(1)}%</p>
    </div>
  );
};

export default EmotionCard;
