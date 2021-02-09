import Category from '../models/category';
import Reciepe from '../models/Reciepe';
import Users from '../models/Users';
import Games from '../models/games';
import Diary from '../models/diary';
import Result from '../models/result';
import ToDoList from '../models/toDoList'
import HealthReport from '../models/healthReport';
import Medicine from '../models/medicine';

export const CATEGORIES = [
  new Category('c1', 'Connect','Communicate', '#f5428d','https://www.mmhealth.org/wp-content/uploads/Family-on-Phones-Resized.jpg'),
  new Category('c2', 'Track Health','Track',  '#f54242','https://www.expatica.com/app/uploads/sites/5/2019/11/Health-Insurance-Quotes-1920x1080.jpg'),
  new Category('c3', 'Reciepe Recorder','Reciepe', '#f5a442','https://appsgeyser.com/blog/wp-content/uploads/2016/12/recipe-icon-6.png'),
  new Category('c4', 'Know The Location','Location', '#f5d142','https://phandroid.com/wp-content/uploads/2019/07/tracking.jpg'),
  new Category('c5', 'Fun','Fun', '#368dff','https://i.iheart.com/v3/re/new_assets/5b61848a278eff04d758ca8f?ops=max(650,0),quality(80)'),
  new Category('c6', 'Result Card','Result', '#41d95d','https://i1.wp.com/www.tamilanjobs.com/wp-content/uploads/2020/03/Meghalaya-PSC-Result-2020.png?ssl=1'),
  new Category('c7', 'To Do List','List', '#9eecff','https://cdn2.vectorstock.com/i/1000x1000/36/96/cartoon-to-do-list-vector-2283696.jpg'),
  new Category('c8', 'Personal Journal','Journal', '#b9ffb0','https://images-na.ssl-images-amazon.com/images/I/51tH5lnyZcL._SY450_.jpg'),
];

export const USERS = [
  new Users('c1', 'Name1','15', 'Son'),
  new Users('c2', 'Name2','18',  'Daughter'),
  new Users('c3', 'Name3','28', 'Brother'),
  new Users('c4', 'Name3','32', 'Friend'),
 
]

export const HEALTHREPORT = [
  new HealthReport('r1', 'Blood Test','14-09-2019', 'https://www.accesalabs.com/downloads/quest-lab-test-sample-report/CBC-Test-Results.jpg'),
  new HealthReport('r2', 'Urine Test','14-09-2019',  'data:image/png;base64,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'),

 
]

export const GAMES = [
  new Games('c1', 'Ludo','https://images-na.ssl-images-amazon.com/images/I/61ByBRDjcOL.png'),
  new Games('c2', 'Carrom','https://rukminim1.flixcart.com/image/352/352/jziqhzk0/board-game/y/v/g/full-size-matte-finish-cut-pocket-carrom-board-tryviz-original-imafjggfpczhvnmc.jpeg?q=70'),
  new Games('c3', 'UNO','https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/uno-game_info-boxart-tablet-348x434_mobile_259524.jpg'),
  new Games('c4', 'Chess','https://i.ytimg.com/vi/UoFqV1lxA7Q/maxresdefault.jpg'),
 
]


export const COMMUNICATION =[
  new Category('c1', 'Text','Text', '#f5428d','https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201805/459499094.jpg'),
  new Category('c2', 'Audio Call','Audio',  '#f54242','https://freedif.org/uploads/2017/03/phone-icon-939.png'),
  new Category('c3', 'Video Call','Video ',  '#f5a442','https://image.shutterstock.com/image-vector/blue-outline-thin-whatsapp-video-260nw-519054460.jpg'),
];

export const HEALTHTRACK =[
  new Category('c1', 'Health Reports','Health',  '#f5428d','data:image/png;base64,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'),
  new Category('c2', 'Medicine Reminder','Medicine',  '#f54242','https://www.afd.fr/sites/afd/files/styles/visuel_principal/public/2019-10-09-27-46/flickr-marco-verch.jpg?itok=XH4x7-Y4'),
  new Category('c3', 'Fit-Bit','Fit',  '#f54242','https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX17193406.jpg'),
];

export const RECIEPES =[
  new Reciepe('r1','CheckenKadi' ,'Checken Kadi','Chicken,ginger-garlic paste,spices and all','First do something','https://image.shutterstock.com/image-photo/top-view-kadai-chicken-gosht-260nw-766324909.jpg','1'),
  new Reciepe('r2','ButterChicken', 'Butter Chicken','Chicken,Butter,ginger-garlic paste,spices and all','First do something','https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg','2'),
  new Reciepe('r3','CheckenKadi' ,'Checken Kadi','Chicken,ginger-garlic paste,spices and all','First do something','https://image.shutterstock.com/image-photo/top-view-kadai-chicken-gosht-260nw-766324909.jpg','3'),
  new Reciepe('r4','ButterChicken', 'Butter Chicken','Chicken,Butter,ginger-garlic paste,spices and all','First do something','https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg'),
  new Reciepe('r5','CheckenKadi' ,'Checken Kadi','Chicken,ginger-garlic paste,spices and all','First do something','https://image.shutterstock.com/image-photo/top-view-kadai-chicken-gosht-260nw-766324909.jpg'),
  new Reciepe('r6','ButterChicken', 'Butter Chicken','Chicken,Butter,ginger-garlic paste,spices and all','First do something','https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg'),
 
];

export const DIARIES =[
  new Diary('d1','Day 1','11/02/2020','There is nothing in my life'),
  new Diary('d2','Day 2','12/02/2020','There is nothing in my life'),
  new Diary('d3','Day 3','13/02/2020','There is nothing in my life'),
  new Diary('d4','Day 4','14/02/2020','There is nothing in my life'),

];

export const RESULTS = [
  new Result('r1','Sem1','../assets/images/result.jpg','89%'),
  new Result('r2','Sem2','../assets/images/result.jpg','91%'),
  new Result('r3','Sem3','../assets/images/result.jpg','90%'),
  new Result('r4','Sem4','../assets/images/result.jpg','72%'),

];


export const TODOLIST =[
  new ToDoList('t1','Work 1','u1','11/02/2020','08:00'),
  new ToDoList('t2','Work 2','u1','12/02/2020','09:00'),
  new ToDoList('t3','Work 3','u1','13/02/2020','12:00'),
  new ToDoList('t4','Work 4','u1','14/02/2020','18:00'),

];


export const MEDICINE =[
  new Medicine('m1','Bumetanide','08:00'),
  new Medicine('m2','Chlorothiazide','10:00'),
  new Medicine('m3','Furosemide','12:00'),
  new Medicine('m4','Indapamide','18:00'),

];














