import Button from "./Button"

const ButtonOut = ({onAdd, showAdd}) =>{

    
    return(
        <div>
           <Button color={showAdd ? "hotpink" : "blue"} 
           text={showAdd ? "Close" : "Add"} 
           onClick={onAdd}
           />
        </div>
    )
}

export default ButtonOut