import React from 'react'

const Contactform = () => {
  return (
    <div className='Help'>
      <div class="Contact-Form">
			<h1> Contact us</h1>
			
			<div class="input-fields">
				<input type="text" class="input" placeholder="Your Name *"/>
				<input type="text" class="input" placeholder="Your Emaill *"/>
				<input type="text" class="input" placeholder="Your Phone *"/>
				
			</div>
			<div class="msg">
				<textarea placeholder="Message *"></textarea>
				
			</div>
			<div>
				<button> Send message</button>
			</div>		
		</div>
    </div>
  )
}

export default Contactform;
