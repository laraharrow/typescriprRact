import * as React from 'react';

// define properties for our component
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

// here is the stateless function component version:
// function Hello({name, enthusiasmLevel = 1}: Props) {
//   if(enthusiasmLevel <= 0) {
//     throw new Error('You need at least level 1 on your enthusiasm to be here!');
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }


// now to write the same as a class:
// since this is a simple stateless project we could have used the SFC but for the sake of
// being able to see the syntax of passing Props to a class with typescript 
// React.Component<Props, object>
// where Props is the types of this.props and object is the types for this.state.

class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1} = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You need at least level 1 on your enthusiasm to be here!'); 
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div> 
    )
  }
}

export default Hello;


// helper functions:
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
