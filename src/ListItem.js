import react from 'react';
import './ListItem.css';


function ListItem(props){
    const items = props.items;

    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input 
                    type="text" 
                    id={item.key} 
                    value={item.text} 
                    onChange= {
                        (e) => {
                           props.setUpdate(e.target.value, item.key)
                        }
                    }
                    />

                    <span>
                        <i className="fas fa-trash-alt" 
                        icon='trash' 
                        id='deleteicon'
                        onClick={ () => props.deleteItem(item.key)}
                        ></i></span>
                </p>
                
            </div>
        })
    return(
        <div>
            {listItems}
        </div>
    )
}

export default ListItem;