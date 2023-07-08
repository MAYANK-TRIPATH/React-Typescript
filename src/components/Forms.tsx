import React, { useState } from 'react'

interface Forms {
    text?: string | number | boolean;
    onClick?: () => void;
    something?: boolean;
}

interface Book {
    name: string;
    price: number;
}

const Forms: React.FC<Forms> = (props) => {
    const { text, onClick } = props;

    const [value, setValue] = useState<string | undefined>();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };


  return (
    <div>
        <input
        onChange={handleNameChange}
        type="text"
        placeholder="Name"
        />
        <h1>{value}</h1>
    </div>
  )
}

export default Forms