import React, {useState} from 'react';

interface MyButtonProps {
    text: string;
    onClick?: () => void;
}

interface Book {
    name: string;
    price: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const {text, onClick} = props;  // for defining props

    const [value, setValue] = useState<Book> ({
       name: 'One',
       price: 10, 
    })  // Its Hooks

    return (
    <div>
        <h3>
           Name {value.name} (Rs. {value.price})
           </h3>
          <button onClick={() => setValue({ name: 'Two', price: 20 })}>{ text }</button>
    </div>
  ); 
};

export default MyButton;