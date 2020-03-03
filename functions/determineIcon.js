export default function determineIcon(name){
    let filename;
    switch(name){
        case 'sorrowful1':
            filename = require('../pictures/sorrowful1.jpg');
            break;
        case 'sorrowful2':
            filename = require('../pictures/sorrowful2.jpg');
            break;
        case 'sorrowful3':
            filename = require('../pictures/sorrowful3.jpg');
            break;
        case 'sorrowful4':
            filename = require('../pictures/sorrowful4.jpg');
            break;
        case 'sorrowful5':
            filename = require('../pictures/sorrowful5.jpeg');
            break;
        case 'glorious1':
            filename = require('../pictures/glorious1.jpeg');
            break;
        case 'glorious2':
            filename = require('../pictures/glorious2.jpg');
            break;
        case 'glorious3':
            filename = require('../pictures/glorious3.jpeg');
            break;
        case 'glorious4':
            filename = require('../pictures/glorious4.jpg');
            break;
        case 'glorious5':
            filename = require('../pictures/glorious5.jpg');
            break;
        case 'joyful1':
            filename = require('../pictures/joyful1.jpg');
            break;
        case 'joyful2':
            filename = require('../pictures/joyful2.png');
            break;
        case 'joyful3':
            filename = require('../pictures/joyful3.jpg');
            break;
        case 'joyful4':
            filename = require('../pictures/joyful4.jpg');
            break;
        case 'joyful5':
            filename = require('../pictures/joyful5.jpg');
            break;
        case 'luminous1':
            filename = require('../pictures/luminous1.jpeg');
            break;
        case 'luminous2':
            filename = require('../pictures/luminous2.jpg');
            break;
        case 'luminous3':
            filename = require('../pictures/luminous3.jpg');
            break;
        case 'luminous4':
            filename = require('../pictures/luminous4.jpg');
            break;
        case 'luminous5':
            filename = require('../pictures/luminous5.jpg');
            break;
        
        default:
            filename = require('../pictures/sorrowful1.jpg');
       
    }
    return filename;
}