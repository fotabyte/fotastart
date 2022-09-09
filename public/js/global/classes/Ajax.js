/**
 * The Ajax class will be used to make an asynchronous requests to the server
 */
class Ajax {

    xhttp; 
    csrfToken;
    /**
     * Creates the XMLHttpRequest object and intializes the variables
     * @param {String} csrfToken the csrf token is needed to send data to the server for security purposes.
     */
    constructor(csrfToken){
        this.xhttp = new XMLHttpRequest();
        this.csrfToken = csrfToken;
    }


    /**
     * Makes a **GET** request and returns a response from the server.
     * If the resource is not found it logs the status of the request in the console
     * and returns false.
     * @param {string} url the laravel route/path to the resource.
     */
    get(url,callback){
        this.xhttp.onreadystatechange = function() {
            if (this.readyState == 4){
                if (this.status == 200) {
                    callback(this);
                }else{
                    console.log(this.status);//For the sake of debugging
                }
            } 
        };
        this.xhttp.open("GET", url);
        this.xhttp.setRequestHeader('X-CSRF-TOKEN',this.csrfToken);
        this.xhttp.send();
    }

    /**
     * Makes a **POST** request and returns a response from the server.
     * If the resource is not found it logs the status of the request in the console
     * and returns false.
     * @param {string} url the laravel route/path to the resource.
     * @param {String} data the data to be sent to the server from the fron-end
     * @param {Function} callback the function that is called when the server sends back a response 
     */
    post(url,data,callback){

        this.xhttp.onreadystatechange = function() {
            if (this.readyState == 4){
                if (this.status == 200) {
                    callback(this);
                }else{
                    console.log(this.status);
                }
            } 
        };
        this.xhttp.open("POST", url);
        this.xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        this.xhttp.setRequestHeader("X-CSRF-TOKEN", this.csrfToken);
        this.xhttp.send(data);
    }
}