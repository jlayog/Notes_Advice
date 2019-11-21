# Props
Immutable data passed to your components.

Accessible in your component as an object called: this.props
ex:
```
    class ShowText extends Component {
        render() {
            // Inside the render method, we have access to this.props
            //(this refers to the ShowText instance).

            return <div>{this.props.text}</div>;
        }
    }
```

## Passing in Props to a component
ex:
```
<ShowText
    text="This is a prop named text"
/>
```

## Props are Immutable
So you can never change 'this.props'
ex:
```
class ShowText extends Component {
    render() {
        // Never ever change this.props

        this.props.text = "Wrong!"; // Causes a TypeError

        this.props = {}; // Never do this

        this.props.newProp = "also wrong"; // Use default props

        return <div>{this.props.text}</div>;
    }
}
```

