const counter = () => {
    let counter = 0;

    return () => {
        counter++;

        console.log(`Counter updated: ${counter}`);

        return counter;
    }
}

const incrementCounter = counter();

export const generateTaskId = () => {
    let newTaskId = incrementCounter();

    return newTaskId;
}