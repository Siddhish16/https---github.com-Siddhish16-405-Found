import './App.css';
import './Components/admin.css';
import Header1 from './Components/Header1';
import img from './Image/Walchand-logo.png'
import Body from './Components/Body';
import student from './Components/student';
import admin from './Components/admin';

function App() {
  return (
    <>
    <Header1></Header1>
    <hr />
    <admin></admin>
    <div>
            <>
            <div className="main">
            <div className="sub-main">
                <div>
                  <h6>Sign in</h6>
                    <div>
                    <h6>Username*</h6>
                      <input type="text" placeholder="user name" className="name"></input>
                    </div>
                    <div className='pass'>
                      <input type="text" placeholder="password" className="name"></input>
                    </div>
                    <button>Log in</button>
                </div>
            </div>

        </div>
            </>
            
        </div>
    </>
     
  );
}

export default App;
