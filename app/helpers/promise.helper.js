const handlePromise = function(promise){
    return promise  
        .then(function(data){
            return [null, data];
        })
        .catch(function(error){
            return [error, undefined];
        })
}

module.exports = handlePromise;