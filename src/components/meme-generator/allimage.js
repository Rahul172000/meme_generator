import React from "react"

class Option extends React.Component
{
    constructor(props)
    {
        super();
        this.state={
            url:props.obj.url,
            name:props.obj.name,
            clickhandler:props.clickhandler,
            //check:props.check//not changing
        }
    }

    render(props)
    {//props used here coz constructor is not called each time when we press that button "edit this one" so this.state.check was not changing
        return(
            <label>
                <img src={this.state.url} style={{width:"200px",marginLeft:"0px"}}/><br/>
                <span className="title" style={{marginLeft:"10px"}}>{
                    this.state.name}<br/>
                    <button style={{marginLeft:"10px"}} onClick={()=>{this.state.clickhandler(this.state.url,this.state.name)}} >{this.props.check!==this.state.name?"EDIT THIS ONE":"SELCTED"}</button>
                </span>    
            </label>
        )
    }
}

export default Option;