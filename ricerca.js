function search() {

  switch ((document.getElementById('searchInput').value).toLowerCase()) {
      case 'valsugana':
          location.href = 'musicavalsugana.html';
          break;

      case 'trento':
          location.href = 'musicatrento.html';
          break;

      case 'val di cembra':
          location.href = 'musicavaldicembra.html';
          break;
      
          case 'val di non':
            location.href = 'musicavaldinon.html';
            break; 

      case 'val di sole':
          location.href = 'musicavaldisole.html';
           break;
          
      case 'alpe cimbra':
           location.href = 'musicaalpecimbra.html';
           break;    
      
      case 'fiemme':
           location.href = 'musicafiemme.html';
           break;
 
       case 'val di fiemme':
           location.href = 'musicafiemme.html';
           break;
 
       case 'fassa':
           location.href = 'musicafassa.html';
           break; 
           case 'val di sole':
            location.href = 'musicavaldisole.html';
             break;
            
        case 'val di fassa':
             location.href = 'musicafassa.html';
             break;    
        
        case 'cembra':
             location.href = 'musicavaldicembra.html';
             break;   
    
default:
  location.href = "musicatrentina.html"
  }
}


  