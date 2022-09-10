class Utility{
    constructor(){};

    /**
     * Builds  **FormData** Object from a JSON object
     * @param {object} data 
     * @returns 
     */
    formData(data){
        let formData = new FormData();

        for (const key in data) {
            formData.append(key, data[key]);
        }

        return formData;
    } 

}
