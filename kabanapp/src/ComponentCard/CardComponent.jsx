import './CardComponent.css'
import { Delete,RadioButtonChecked,CheckCircle } from '@material-ui/icons';

function TemplateCard(props){

    return(

      <div className="tasks-box">
      {props.status === "done" ? (
        <CheckCircle className="icon finished-icon"></CheckCircle>
      ) : (
        <RadioButtonChecked className="icon to-do-icon"></RadioButtonChecked>
      )}
      <div>
        <h4 className="task-title">{props.title}</h4>
        <p className="task-info">
          # {props.id} created on {props.date}{" "}
        </p>
      </div>
      <div>
        <Delete class="trashcan"></Delete>
      </div>
    </div>
    )
}
export default TemplateCard;