# axios-cancel-request

Cancel previous requests if not completed when a new one is called. This library make it easy to use axios cancel request feature

 
# Download
``` npm install axios-cancel-request ```

# Usage
``` 
    import axiosCancelRequest from 'axios-cancel-request';
    import axios from 'axios';
    
    // pass in your axios instance
    
    const cancelabeRequest = axiosCancelRequest(axios);
    
    // Call api using axios request config
    // details at https://github.com/axios/axios#request-config
    
    // Example:
    
    cancelabeRequest({url:'replace-by-your-api-url'})
        .then(res=>{console.log(res})
        .catch(error=> {
            if (axios.isCancel(error)) {
                console.log('a new request is made, cancel previous incomplete request')
            } else {
                // handle other normal errors here
            }
        })
```


