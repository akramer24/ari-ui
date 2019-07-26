import React from 'react';
import * as components from '../components';
import * as examples from '../examples';

const Component = props => {
  const ComponentToRender = components[props.match.params.component];
  const componentExamples = examples[props.match.params.component];

  return (
    <div id="examples">
      {
        componentExamples && componentExamples.map(e => (
          <div key={e.title} className="component-example">
            <div>{e.title}</div>
            <ComponentToRender {...e.props} />
          </div>
        ))
      }
    </div>
  )
}

export default Component;