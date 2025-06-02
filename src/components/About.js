export default function About(props) {

    let myStyle ={
        color:props.mode==='dark'? 'white':'black',
        backgroundColor:props.mode==='dark'? 'rgb(42, 58, 108)':'white'
    }

return (
        <div className="container" style={{color:props.mode==='dark'? 'white':'black',
        backgroundColor:props.mode==='dark'? 'rgb(34, 49, 71)':'white'}}>
            <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is TextUtils?
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils is a free, browser-based text utility tool designed to help users perform quick and effective text transformations. Whether you need to change case, format your writing, or clean up your text, TextUtils makes it simple and fast with an intuitive interface.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Features Offered
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils provides several useful text operations, including:
            <ul>
                <li>Convert text to <strong>Uppercase</strong> or <strong>Lowercase</strong></li>
                <li><strong>Clear</strong> all text with one click</li>
                <li><strong>Reverse</strong> words for fun or creative effects</li>
                <li><strong>Capitalize</strong> the first letter of each word</li>
                <li><strong>Copy</strong> text directly to the clipboard</li>
                <li><strong>Remove extra spaces</strong> to clean up text formatting</li>
                All actions are performed instantly in your browser – no data is uploaded or stored.
            </ul> 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Developer Information
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        This tool was developed by <strong>Pankaj Kumar Yadav</strong> as a personal web project to practice and 
        showcase skills in React.js and frontend development.
        <br/><br/>
        <strong>GitHub:</strong> <a href="https://github.com/pankajydv123" target="_blank" 
        rel="noreferrer">pankajydv123</a><br />
        <strong>Project Repo:</strong> <a href="https://pankajydv123.github.io/Utils_Pankaj/" target="_blank" 
        rel="noreferrer">Live Website</a><br />
        <strong>Technologies Used:</strong> React.js, Bootstrap, HTML, CSS<br />
        <strong>Purpose:</strong> To provide a lightweight, no-login-required platform for text manipulation tasks and to 
        enhance personal frontend development experience.
        </div>
        </div>
    </div>
    </div>
    
        </div>
  )
}

