import React, { useState } from 'react';
import './App.css';

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addItem = () => {
        if (newItem) {
            if (editIndex !== null) {
                const updatedItems = items.map((item, index) => (index === editIndex ? newItem : item));
                setItems(updatedItems);
                setEditIndex(null);
            } else {
                setItems([...items, newItem]);
            }
            setNewItem('');
        }
    };

    const removeItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const startEdit = (index) => {
        setNewItem(items[index]);
        setEditIndex(index);
    };

    return (
        <div className="App">
            <h1>Lista de Itens</h1>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Adicionar ou editar item"
            />
            <button onClick={addItem}>{editIndex !== null ? 'Salvar' : 'Adicionar'}</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => startEdit(index)}>Editar</button>
                        <button onClick={() => removeItem(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;