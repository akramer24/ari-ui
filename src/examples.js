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
    title: 'Input 1',
    props: {
      placeholder: 'Type here...',
      label: 'Input 1',
      labelPosition: 'left'
    }
  },
  {
    title: 'Input 2',
    props: {
      label: 'Input 2',
    }
  }
]

export const Select = [
  {
    title: 'Select',
    props: {
      choices: [
        'DJ LeMahieu',
        'Aaron Judge',
        'Luke Voit',
        'Edwin Encarnacion',
        'Gary Sanchez',
        'Gleyber Torres',
        'Didi Gregorius',
        'Aaron Hicks',
        'Brett Gardner',
        'Giancarlo Stanton',
        'Mike Tauchman',
        'Cameron Maybin',
        'Gio Urshela',
        'James Paxton',
        'Luis Severino',
        'Domingo German',
        'Masahiro Tanaka',
        'JA Happ',
        'Chad Green',
        'Nestor Cortes',
        'Zack Britton',
        'Tommy Kahnle',
        'Aroldis Chapman',
        'Adam Ottavino',
        'Mike Trout',
        'Shohei Ohtani',
        'Kole Calhoun',
        'Andrelton Simmons',
        'Howie Kendrick',
        'Todd Frazier',
        'Clint Frazier',
        'Noah Syndergaard',
        'Jacob DeGrom',
        'Marcus Stroman',
        'Steven Matz',
        'Zack Wheeler',
        'Jeurys Familia',
        'Edwin Diaz',
        'Seth Lugo',
        'Michael Conforto',
        'Jeff McNeil',
        'Juan Lagares',
        'Yoenis Cespedes',
        'Pete Alonso',
        'Dom Smith',
        'Ahmed Rosario',
        'Wilson Ramos',
        'Mookie Betts',
        'Jackie Bradley Jr.',
        'Xander Boegaerts',
        'JD Martinez',
        'Brock Holt',
        'Rafael Devers',
        'Christian Vasquez',
        'Sandy Leon',
        'Andrew Benintendi',
        'Dustin Pedroia',
      ]
    }
  }
]

export const TextArea = [
  {
    title: 'TextArea',
    props: {
      placeholder: 'Type here...',
      label: 'TextArea',
      labelPosition: 'left'
    }
  },
]