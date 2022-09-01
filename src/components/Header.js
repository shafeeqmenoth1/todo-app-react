import React from 'react'
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];
function Header() {
  
  return (
    <div>
          <div className='todo-header'>To-Do List</div>
          <div className="day-name">
           
         Whoop! it's <span className='dayname'>{dayName}</span>  &#128512;

         
       </div>
    </div>

    
  )
}

export default Header