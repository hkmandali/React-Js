Components : Organization of structure , each functionality should be in a different file , components should be capital

React has something called Virtual DOM , which renders the data 

In react , the data flow is uni-directional from parent to child unlike angular where the data flow is bi directional , i.e two way data binding , this is to have more control over the data 

The data is rendered in react using 

> Reactdom.render(what do I want to render , where I want to render it ) , 

> eg: ReactDOM.render( <br />
    <React.StrictMode>
      <MemeGeneratorApp/> // data I want to render , this is the class which extends react components , or a function which returns html component <br />
    </React.StrictMode>, <br />
    document.getElementById('root') <br />
  ); <br />
  
import React from "react" ->this will enable the jsx version

JSX -> js version of html

Each file should contain only one react component --> this is a btr convention

Parent/Child components : component inside a component , this is useful for segregation of code

parent child is useful in case of large projects , so that flow would be easy and managing the code becomes simple

class in html for css is replaced by className in jsx

className can be applied to react elements(basic html) and not to react component

to interpret js from jsx , just surround any js code with {} ( curly braces )

to display { or  } in jsx , we can do that by {"{}"} // i.e first one to decode that it is js and then the actual {

to use props in class based components , we need to use this.props to use state , we need to use class

we cannot change props of a component(i.e state cannot be changed)

state should not be changed by us directly , we need to use setState

whereever we use setstate , we need to bind that method in the constructor in this way this.method = this.method.bind(this)

lifecycle : 
  * render , // to display the content
  * static getDerivedStateFromProps
  * getSnapshotBeforeUpdate // that allows to create a backup of current way things are
  * componentWillMount
  * componentDidMount -> is run once when the component is born for the first time
  * componentWillReceiveProps -> 
  * shouldComponentUpdate -> 
  * componentWillUnmount ->  this will reset / remove all the listeners / (or) to clean up

formik is a library used for dealing easily with forms

form actions can be done by onSubmit = handleSUbmit (where we can have control over the data )


Container / Component Architecture :
