import React from "react";

class TimerClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineWidth: 100,
            time: props.startTime,
            status: props.autostart,
            step: props.step
        };
        this.resetTimerHandler = this.resetTimerHandler.bind(this);
        this.timerToggleHandler = this.timerToggleHandler.bind(this);
    }
    componentDidMount() {
        this.countDown()
    }
    countDown = () => {
        if (this.state.status) {
            this.setState((prevState) => {
                let newWidth = this.state.lineWidth - this.state.lineWidth / this.state.time *  this.state.step / 1000;
                return{
                    time: prevState.time - this.state.step/1000,
                    lineWidth: newWidth,
                }
            });
        }
    }

    componentDidUpdate(prevProps){
        if((this.state.time > 0) && this.state.status ){
            setTimeout(this.countDown, this.state.step) 
        }
        if(this.state.time <= 0) {
            this.setState((state,props) => ({
                time: this.props.startTime,
                lineWidth: 100,
                status: false
            }))
        }
    }

    resetTimerHandler() {
        this.setState((state,props) => ({
            lineWidth:100,
            time: this.props.startTime,
            status: true
        }));
    }

    timerToggleHandler() {
        this.setState((state) => ({
            status: !state.status
        }));
    }
    
    render() {
        return (
            <div className="timer-container">
                <div className="timer-controls">
                    <button className="timer-toggle" onClick={this.timerToggleHandler}>{this.state.status ? "stop" : "start"}</button>
                    <button className="timer-reset" onClick={this.resetTimerHandler}>Reset</button>
                </div>
                <div className="timer-wrapper">
                    <div className="timer-line" style={{width: this.state.lineWidth + '%'}}></div>
                </div>
            </div>
        );
    }
}

export default TimerClass;
