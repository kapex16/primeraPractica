import style from './Items.module.css'

export function Items() {

  return (
  <div className={style.box_add_card}>
  <textarea className={style.input_box} type="text" placeholder="Enter a note"></textarea>

  <div className={style.container_button_note}>
    <button className={style.button_add_note}>Add</button>
    <button className={style.button_cancel_note}>Cancel</button>
  </div>
</div>
  )}
