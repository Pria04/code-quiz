import React from 'react'


class Weather extends React.Component {
    render() {
        return(
            <div> 
                {this.props.city && this.props.country && <p>Location:{this.props.city}, {this.props.country}</p> }
                {this.props.temprature && <p> Temprature: {this.props.temprature}</p>}
                {this.props.humidity && <p>Humidity:  {this.props.humidity} </p> }
                {this.props.description && <p>Description: {this.props.description} </p> }
                {this.props.icon && <img src = {`http://openweathermap.org/img/w/${this.props.icon}.png`} alt = "Weather icon"/>}
                {this.props.error && <p>Error: {this.props.error}</p>}
                
                
                
                
               
               

            </div>
        )
    }
}

export default Weather