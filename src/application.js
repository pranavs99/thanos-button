import React, { Component } from "react"
import { Button } from "react-bootstrap"

class ThanosButton extends Component {
    // constructor for thanosApp
    constructor(props) {
        // signifying that the class thanosApp inherits its props
        // from its superclass, React.Component
        super(props)
        // binding the .handleThanosClick() function to this Component
        this.handleThanosClick = this.handleThanosClick.bind(this)
        // setting a default state
        // the field text defines what is displayed on the button
        // the field num_clicks defines the number next to the button
        this.state = {
            isFirstTimeDisplaying: true,
            userGotSnapped: false,
            thanosText: "How many clicks can you survive before you get snapped?",
            num_thanosClicks: 0
        }
    }

    // handling button clicks
    handleThanosClick() {
        // choosing a random number from 0 to 4
        const thanosChoice = Math.floor(Math.random() * 5);

        // setting the isFirstLoaded flag to false so we can display
        // the number of clicks the user lasted
        this.setState({
            isFirstTimeDisplaying: false
        })

        // if the user just got snapped, we need to reset the number of clicks
        // back to 0 and reset the flag back to false
        if (this.state.userGotSnapped) {
            this.setState({
                userGotSnapped: false
            })
            // for some reason, it didn't quite work to set num_thanosClick inside
            // setState({})
            this.state.num_thanosClicks = 0
        }

        // based on the value of thanosChoice, we'll display different text
        // but with each click, num_clicks will increment so the player
        // can see how many clicks they lasted
        switch (thanosChoice) {
            case 0:
                this.setState({
                    thanosText: "THANOS CAR THANOS CAR",
                    num_thanosClicks: this.state.num_thanosClicks + 1
                })
                break
            case 1:
                this.setState({
                    thanosText: "THANOS HOUSE THANOS HOUSE",
                    num_thanosClicks: this.state.num_thanosClicks + 1
                })
                break
            case 2:
                this.setState({
                    thanosText: "THANOS WINE THANOS WINE",
                    num_thanosClicks: this.state.num_thanosClicks + 1
                })
                break
            case 3:
                this.setState({
                    thanosText: "THANOS SHOE THANOS SHOE",
                    num_thanosClicks: this.state.num_thanosClicks + 1
                })
                break
            default:
                this.setState({
                    thanosText: "*snap*",
                    userGotSnapped: true,
                })
                break
        }
    }

    // defining what the user actually sees
    render() {
        const isFirstTime = this.state.isFirstTimeDisplaying
        const snapped = this.state.userGotSnapped
        const num_clicks = this.state.num_thanosClicks

        // we need to create an empty variable that will store the Button object
        // after we decide what to display on it
        let b 

        // if this is the first time loading, we provide the welcome message of
        // the default this.state.thanosText
        if (isFirstTime) {
            b = <Button variant = "primary" onClick = {this.handleThanosClick}>
                    {this.state.thanosText}
                </Button>
        }
        else {
            // if the user just got snapped, we tell them how many clicks they lasted
            // based on the amount of clicks, we'll display a different message
            if (snapped) {
                // i'm a stickler for grammar, so if they only survived 1 click, it's important
                // for me to display "1 click"
                if (num_clicks == 1) {
                    b = <Button variant = "outline-danger" onClick = {this.handleThanosClick}>
                        {this.state.thanosText}
                        <br/>
                        You got snapped after {this.state.num_thanosClicks} click.
                        <br/>
                        This does... put a smile on my face.
                    </Button>
                }
                // if they got snapped after 0 or 2-5 clicks, they're an amateur
                else if (num_clicks < 6) {
                    b = <Button variant = "outline-danger" onClick = {this.handleThanosClick}>
                        {this.state.thanosText}
                        <br/>
                        You got snapped after {this.state.num_thanosClicks} clicks.
                        <br/>
                        This does... put a smile on my face.
                    </Button>
                }
                // but if they survive more than 5 clicks, they must be something special
                else {
                    b = <Button variant = "outline-danger" onClick = {this.handleThanosClick}>
                        {this.state.thanosText}
                        <br/>
                        You finally got snapped after {this.state.num_thanosClicks} clicks.
                        <br/>
                        I am inevitable.
                    </Button>
                }
            }
            // and if the user's last click was NOT a snap, they can keep proceeding
            // like usual
            else {
                // i'm a stickler for grammar, like i said
                if (num_clicks == 1) {
                    b = <Button variant = "outline-success" onClick = {this.handleThanosClick}>
                            {this.state.thanosText}
                            <br/>
                            {this.state.num_thanosClicks} click survived
                        </Button>
                }
                else {
                    b = <Button variant = "outline-success" onClick = {this.handleThanosClick}>
                            {this.state.thanosText}
                            <br/>
                            {this.state.num_thanosClicks} clicks survived
                        </Button>
                }
            }
        }

        // we've already handled the logic for displaying different things on the button,
        // so all we have left to do is display the button itself, conatined in variable b
        return (
            <div className = "thanosButton">
                {b}
            </div>
        );
    }
}

export default ThanosButton;
