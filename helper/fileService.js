import fs from "fs";

export const readJSON = () => {
    let rawdata = fs.readFileSync('data.json');

    // Parse the JSON data
    let data = JSON.parse(rawdata);

    return data;
}

export const writeJSON = (updatedData) => {
    let jsonData = JSON.stringify(updatedData);

    // Write the JSON string to a file
    fs.writeFileSync('data.json', jsonData);
}