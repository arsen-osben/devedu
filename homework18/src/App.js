import TimerClass from "./components/TimerClass";

function App() {
    return (
        <div>
            <TimerClass startTime={10} step={1000} autostart={true}></TimerClass>
            <TimerClass startTime={10} step={100} autostart={true}></TimerClass>
            <TimerClass startTime={10} step={100} autostart={false}></TimerClass>
        </div>
    );
}

export default App;
