import FeedbackData from "./util/feedback.js"
import FeedbackList from "./components/FeedbackList.jsx"
import Header from "./components/Header"
import {useState} from 'react'

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)



    return (
        <>  
        <Header/>
        <div className="container">
            <FeedbackList feedback={feedback}></FeedbackList>
        </div>
        </>
    )
}

export default App;