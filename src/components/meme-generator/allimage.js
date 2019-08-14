import React from "react"

class Option extends React.Component
{
    constructor(props)
    {
        super();
        this.state={
            url:props.obj.url,
            name:props.obj.name,
            clickhandler:props.clickhandler
        }
    }

    render(props)
    {
        return(
            <label>
                <img src={this.state.url} style={{width:"200px",marginLeft:"0px"}}/><br/>
                <span className="title" style={{marginLeft:"10px"}}>{
                    this.state.name}<br/>
                    <button style={{marginLeft:"10px"}} onClick={()=>{this.state.clickhandler(this.state.url)}} >EDIT THIS ONE</button>
                </span>    
            </label>
        )
    }
}

export default Option;