import { useState } from 'react';
import store from '../utils/store';

export const useApp = () => {

    const [data, setData] = useState(store);

    const onChangeTitle = (input, cardId) => {
        setData(prev => prev.map(item => {
            if (item.id === cardId) {
                return {
                    ...item,
                    title: input
                }
            };
            return item;
        }))
    }


    const onChangeText = (input, taskId, cardId) => {
        setData(prev => prev.map(item1 => {
            if (item1.id === cardId) {
                return {
                    ...item1,
                    tasks: item1.tasks.map(item => {
                        if (item.id === taskId) {
                            return {
                                ...item,
                                text: input
                            }
                        }
                        return item;
                    })
                }
            }
            return item1;
        }))
    }

    const onChangeChecked = (taskId, cardId) => {
        setData(prev => prev.map(item1 => { 
            if (item1.id === cardId) {
                return {
                    ...item1,
                    tasks: item1.tasks.map(item => {
                        if (item.id === taskId) {
                            return {
                                ...item,
                                checked: !item.checked,
                                p: 'amogus'
                            }
                        };
                        return item;
                    })
                }
            };
            return item1;
        }))
    }

    const addNewTask = (cardId, inputTask) => {
        if (inputTask !== '') {
            setData(prev => prev.map(item => {
                if (item.id === cardId) {
                    return {
                        ...item,
                        tasks: [
                            ...item.tasks,
                            {
                                "id": item.tasks[item.tasks.length - 1].id + 1,
                                "text": inputTask,
                                "checked": false
                            }
                        ]
                    }
                };
                return item;
            }))
        } else {}
    }

    const onDeleteTask = (taskId, cardId) => {
        setData(prev => prev.map(item1 => {
            if (item1.id === cardId) {
                return {
                    ...item1,
                    tasks: item1.tasks.filter(item => item.id !== taskId)
                }
            };
            return item1;   
        }))
    }

    const onDeleteCard = (cardId) => setData(prev => prev.filter(item => item.id !== cardId))

    const newCard = (input) => {
        if (input !== '') {
            setData(prev => [
                        ...prev,
                        {   
                            id: prev[prev.length-1].id + 1,
                            title: input,
                            tasks: []
                        }
                    ])
        } else {}
    }

    return {
        data,
        onChangeTitle,
        onChangeText,
        onChangeChecked,
        addNewTask,
        onDeleteTask,
        onDeleteCard,
        newCard
    }
}
