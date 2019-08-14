import React from "react"

function Form(props)
{
    return(
        <form>
            <input type="text" name="toptext" placeholder="TOP OF THE IMAGE TEXT" onChange={props.changehandler}/>
            <button>GENERATE</button>
            <input type="text" name="bottomtext" placeholder="BOTTOM OF THE IMAGE TEXT" onChange={props.changehandler}/>
        </form>
)
}

export default Form;