import React from 'react'
import Tittles from './Components/Tittle'
import Weather from './Components/Weather'
import Form from './Components/Form'
import './App.css'



const API_KEY ='4109e9e86ffd51dd058dc42a5230529b'

class App extends React.Component{

  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault(); //prevent the page from loading the full page
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_url.json()
    console.log(data)

 if(city && country){
  this.setState ({
    temprature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    error: ""

  })
 } else {
  this.setState ({
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: "Please Enter the City and Country Name"

  })
 }
    
  }
  render(){
    return(
      <div className="container">
        <Tittles/>
        <Weather
        temprature= {this.state.temprature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        icon = {this.state.icon}
        error = {this.state.error}
        />
        <Form getWeather={this.getWeather} />
        
      </div>
    )
  }
}

export default App