import './style.css';

export function Items() {

  return (
  <div className='box_add_card'>
  <textarea className='input_box' type="text" placeholder="Enter a note"></textarea>
  <div className='container_button_note'>
    <button className='button_input button_add_note'>Add</button>
    <button className='button_input button_cancel_note'>Cancel</button>
  </div>
</div>
  )}

  export default Items;
