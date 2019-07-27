import React from 'react';
import { Button as AriButton } from './components';
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
      type: 'primary',
      onClick() { console.log('primary button clicked') },
      children: 'Click me!'
    }
  },
  {
    title: 'Danger Button',
    props: {
      type: 'danger',
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

export const Input = [
  {
    title: 'Regular input',
    props: {
      placeholder: 'Type here...'
    }
  },
  {
    title: 'Date input',
    props: {
      type: 'date'
    }
  }
]