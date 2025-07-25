import { useParams } from 'react-router-dom';

function TrainerDetail(props) {
  const { trainerId } = useParams();
  const trainer = props.trainers.find(t => t.trainerId === trainerId);

  return (
    <div>
      <h2>Trainers Details</h2>
      <h4>{trainer.name} ({trainer.technology})</h4>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetail;
