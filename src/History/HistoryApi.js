var axios = require('axios');

const containerName = 'historycontainer'
// const myblob = 'blob.json'
const connectionString = 'DefaultEndpointsProtocol=https;AccountName=instagram1search1results;AccountKey=Aiar5wLGOLgO45PeRV3SdXk/30PXex/Q7gvurRmItmxHcPSlLuxUTzKMggkuQ59pt50KnXvlF1IjDQcF8VGoxQ==;EndpointSuffix=core.windows.net'
var azure = require('azure-storage');
var blobService = azure.createBlobService(connectionString);


module.exports = {


    getAllBlobs: function(){
    var blobsArrayText = [];
    blobService.listBlobsSegmented(containerName, null,  (error, results) => {
        // var blobsArrayText = [];
        if (error) {
                console.log("errorrrrrrrrrr");
        } else {
            for (var i = 0, blob; blob = results.entries[i]; i++) {
                // Deal with blob object
                console.log(blob);

                blobService.getBlobToText(containerName, blob.name, function(error, text){
                    if(error){
                        console.error(error);
                    } else {
                    	// blobsText.push(text)
                       var data = text;
                        var jsonVar = JSON.parse(data)
                        blobsArrayText.push(jsonVar);
                        console.log(jsonVar.link);
                    }
        });}
            }

    });
             return blobsArrayText;

  },

	uploadBlobFromText: function(currSearch, currResult){   
	 var data = JSON.stringify({artist: currSearch, link:currResult});  
      var createBlobDate = new Date();
     blobService.createBlockBlobFromText(containerName, createBlobDate.toString(), data,  function(error, result, response){
      console.log("in uploadBlobFromText")
         if (error) {
             alert('Upload filed, open browser console for more detailed info.');
             console.log(error);
         } else {
             alert('Upload successfully!');
         }
     })}
}
