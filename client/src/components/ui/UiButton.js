import React from 'react'

const UiButton = ({titlte, func}) => {
  const handleClick = (e) =>{
    func(e)
  }
  return (
    <button 
      onClick={(e)=>handleClick(e)}
      className="btn btn-outline-warning  btn-md px-5" 
      type="submit"
      onMouseOver={(e) => {
        e.target.style.color = '#000000'
        e.target.style.backgroundColor = '#c79100'
      }}
      onMouseOut={(e) => {
        e.target.style.color = '#ffc107'
        e.target.style.backgroundColor = 'transparent'
      }}
    >
      {titlte}
    </button>
  )
}

export default UiButton
