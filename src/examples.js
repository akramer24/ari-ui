import React from 'react';
import { Button as AriButton, Input as AriInput } from './components';
import ModalExample from './examples/modal';

export const Button = [
  {
    title: 'Default Button',
    props: {
      children: 'Click me!'
    }
  },
  {
    title: 'Primary Button',
    props: {
      kind: 'primary',
      onClick() { console.log('primary button clicked') },
      children: 'Click me!'
    }
  },
  {
    title: 'Danger Button',
    props: {
      kind: 'danger',
      children: 'Click me!'
    }
  },
  {
    title: 'Disabled Button',
    props: {
      disabled: true,
      children: 'Click me!'
    }
  },
  {
    title: 'Round-edged Button',
    props: {
      edge: 'round',
      children: 'Click me!'
    }
  }
]

export const Calendar = [
  {
    title: 'Calendar',
    props: {
      onSelect(date) {
        console.log('date', date);
      },
      onPanelChange(month, year) {
        console.log('month', month);
        console.log('year', year);
      }
    }
  }
]

export const Card = [
  {
    title: 'Card with header and footer',
    props: {
      children: <div>Hi</div>,
      header: <div>Header</div>,
      footer: <AriButton>click</AriButton>
    }
  },
  {
    title: 'Card with custom style',
    props: {
      children: <div>Hi</div>,
      style: { height: 200 }
    }
  },
  {
    title: 'Card with image',
    props: {
      children: <img src="https://miro.medium.com/max/1200/1*9FSCAlNo0nDS6jZLueqewQ.png" alt="groucho" height={200} width={300} />,
      footer: <div>With image.</div>,
      padded: false
    }
  },
  {
    title: 'Modal launching card',
    props: {
      children: <ModalExample />
    }
  }
]

export const Divider = [
  {
    title: 'Horizontal Divider'
  },
  {
    title: 'Vertical Divider',
    props: {
      alignment: 'vertical'
    }
  }
]

export const Form = [
  {
    title: 'Form with columns',
    props: {
      content: [[< AriInput label="col 1 input 1" />, <AriInput label="col 1 input 2" />, < AriInput label="col 1 input 3" />, <AriInput label="col 1 input 4" />], [<AriInput label="col 2 input 1" />, <AriInput label="col 2 input 2" />, <AriInput label="col 2 input 3" />, <AriInput label="col 2 input 4" />]]
    }
  },
  {
    title: 'Form with rows',
    props: {
      content: [[< AriInput labelPosition="left" label="row 1 input 1" />, <AriInput labelPosition="left" label="row 1 input 2" />, < AriInput labelPosition="left" label="row 1 input 3" />, <AriInput labelPosition="left" label="row 1 input 4" />], [<AriInput labelPosition="left" label="row 2 input 1" />, <AriInput labelPosition="left" label="row 2 input 2" />, <AriInput labelPosition="left" label="row 2 input 3" />, <AriInput labelPosition="left" label="row 2 input 4" />]]
    }
  }
]

export const Input = [
  {
    props: {
      placeholder: 'Type here...',
      label: 'Input 1',
      labelPosition: 'left'
    }
  },
  {
    props: {
      label: 'Input 2',
    }
  }
]