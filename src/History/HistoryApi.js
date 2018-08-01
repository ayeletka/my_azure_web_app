const containerName = 'historycontainer'
const connectionString = 'DefaultEndpointsProtocol=https;AccountName=instagram1search1results;AccountKey=Aiar5wLGOLgO45PeRV3SdXk/30PXex/Q7gvurRmItmxHcPSlLuxUTzKMggkuQ59pt50KnXvlF1IjDQcF8VGoxQ==;EndpointSuffix=core.windows.net'
const azure = require('azure-storage');
const blobService = azure.createBlobService(connectionString);

let currentCallback = () => { console.log('No callback')};

const getAllBlobs = (callback) => {
    const blobsArrayText = [];
    if (callback) currentCallback = callback;
    blobService.listBlobsSegmented(containerName, null,  (error, results) => {
      if (error){
              console.log("error");
      } else {
        const len = results.entries.length;
          for (let i = 0; i < len; i++) {
              // Deal with blob object
              const blob = results.entries[i];
              blobService.getBlobToText(containerName, blob.name, function(error, text){
                  if(error){
                      console.error(error);
                  } else {
                     var data = text;
                      var jsonVar = JSON.parse(data)
                      blobsArrayText.push(jsonVar);
                      if (blobsArrayText.length === len) {
                        currentCallback(blobsArrayText);
                      }
                  }
              });
          }
      }
    });
};


const uploadBlobFromText = (currSearch, currResult, callback) => {   
    const data = JSON.stringify({artist: currSearch, link:currResult});  
    const createBlobDate = new Date();
    blobService.createBlockBlobFromText(containerName, createBlobDate.toString(), data,  function(error, result, response){
        console.log("in uploadBlobFromText")
        if (error)
        {
          console.log('Upload failed, open browser console for more detailed info.');
          console.log(error);
        }
        else
        {
         console.log('Upload successfully!');
         getAllBlobs();
        }

    })
};

module.exports = {
  getAllBlobs,
  uploadBlobFromText
}
