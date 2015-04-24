  request.onreadystatechange = function(){
    if (this.readyState == this.DONE){
      if(this.status == 200){
        console.log('Status ' + this.status + ' everything is good.');
      }
      else if (this.status == 500){
        console.log('Status ' + this.status + ' we have a problem, server error.');
      }
      else if (this.status == 404){
        console.log('Status ' + this.status + ' we have a problem, Page (or script) not found.');
      }
      else{
        console.log('Status '+ this.status + ' see error number for details.');
      }
    }
  };
