/* eslint-env jquery */
import {Fragment, useState} from 'react';


export default function EditTodo(props) {

    const [modalFieldText, setModalFieldText] = useState('');

    const didWrite = (event) => {
        setModalFieldText(event.target.value);
    } 


    
    const handleClick = (id) => {
        props.clickedSave(id, modalFieldText);
        setModalFieldText('');
    };
    



    
  return (
    <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#myModal ${props.id}`} className="table_button">
         edit
        </button>


      {/* <!-- The Modal --> */}
      <div class="modal" id={`myModal ${props.id}`} >
        <div class="modal-dialog" >
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal" className="modal_cross" onClick={() => setModalFieldText('')} >
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">
                <input value={modalFieldText} placeholder={props.desc} onChange={didWrite}className='modal_field'/>
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button type="button"  data-dismiss="modal" onClick={() => handleClick(props.id)} className="table_button">
                Save
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" className="table_button">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
