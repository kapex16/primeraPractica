import './Done.css';

function TemplateDone(){

 return(
    <div className="card_template cardTemplate3">
        <div className="container-done">
            <h1 className="title-column"><span className="circle_count">1</span>Done</h1>
            <div className="container_button_done">
                <button className="button_add_task">+</button>
                <button>Clear All</button>
            </div> 
        </div>
    </div>


 )

}

export default TemplateDone;