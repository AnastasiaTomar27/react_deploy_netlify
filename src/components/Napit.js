import email from "./images/email.png"
import linkedin from "./images/linkedin.png"


export default function Napit() {
    return(
        <div>
            <button type="button" className="email" onClick={(e) => {
                e.preventDefault();
                window.location.href='mailto:anastasia.tomar@edu.keuda.fi';
                }}>
                <img src={email} className="icon" alt="email button"/>Sähköposti
            </button>
            <button type="button" className="linkedin" onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.linkedin.com/in/anastasia-tomar-475758176/';
                }}>
                <img src={linkedin} className="icon" alt="linkedin button"/>LinkedIn
            </button>
        </div>
    )
}