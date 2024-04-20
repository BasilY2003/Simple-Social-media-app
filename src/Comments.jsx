import 'bootstrap/dist/css/bootstrap.min.css';

export default function Comments({ name, content, createdAt, numberoflikes }) {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h4>{name}</h4>
          <h5>{content}</h5>
        </div>
        <p>{numberoflikes}</p>
      </div>
      <small>{createdAt}</small>
    </li>
  );
}
