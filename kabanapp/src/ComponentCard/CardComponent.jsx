import { Delete,RadioButtonChecked} from '@material-ui/icons';

function TemplateCard(){

    return(

        <div class="tasks-box">
        <i class="to-do-icon finished-icon icon">
        </i>
        <RadioButtonChecked className="to-do-icon" ></RadioButtonChecked>
        <Delete class="trashcan"></Delete>
        <p className="task-title">
          titulo de tarea
        </p>
        <p class="task-info">
          info de tarea
        </p>
      </div>
    )
}
export default TemplateCard;