
var table = document.getElementById('varsityroster')
console.log(table.id)
function buildVarsityRoster(num, name, pos, grade) {
    table.style.border = 'lightgrey solid 1px'
    table.style.borderSpacing = '0'
    var player = document.createElement('tr') 
    player.id = 'player' + num
    player.className = 'player'
    console.log('player.id')
    player.children.className = 'playerChildren'
    player.style.border = 'lightgrey solid 1px'
    var number = document.createElement('td')
    var fullName = document.createElement('td')
    var position = document.createElement('td')
    var gradeAge = document.createElement('td')
    number.className = 'playerChildren'
    fullName.className = 'playerChildren'
    position.className = 'playerChildren'
    gradeAge.className = 'playerChildren'

    number.innerHTML = '<h4>'+num+'</h4>'
    fullName.innerHTML = '<h4>'+name+'</h4>'
    position.innerHTML = '<h4>'+pos+'</h4>'
    gradeAge.innerHTML = '<h4>'+grade+'</h4>'
    player.style.textAlign = 'center'
    player.style.fontFamily = '"Source Serif Pro", serif'
    
    table.appendChild(player)
    player.appendChild(number)
    player.appendChild(fullName)
    player.appendChild(position)
    player.appendChild(gradeAge)
}
buildVarsityRoster('2','Robert Felix','','12')
buildVarsityRoster('4','Osman Solano','WR/DB','12')
buildVarsityRoster('5','Logan Petrosino','QB/DB','12')
buildVarsityRoster('6','Matthew Sopp','WR/LB','12')
buildVarsityRoster('7','Maverick Genest','QB/DB','10')
buildVarsityRoster('8','Devon Smalls','RB/DB','12')
buildVarsityRoster('9','Kevin Hubbard','RB/LB','11')
buildVarsityRoster('10','Brendan McCarron','TE/DB','11')
buildVarsityRoster('11','Daniel Conant','WR/DB','11')
buildVarsityRoster('12','Jared Pieroni','TE/LB','12')
buildVarsityRoster('14','Brian Kessel','QB/DB','11')
buildVarsityRoster('15','Emmett Letourneau','TE/LB','11')
buildVarsityRoster('16','Gregory White','QB/LB','10')
buildVarsityRoster('19','Shane Callahan','WR/DB','11')
buildVarsityRoster('20','Victor Lima','WR/DB','10')
buildVarsityRoster('22','Christian Diaz','RB/LB','10')
buildVarsityRoster('23','Marcelo Pinto','RB/DB','11')
buildVarsityRoster('27','Jayden Ferreras','RB/LB','10')
buildVarsityRoster('28','Roman Sullivan','RB/DB','10')
buildVarsityRoster('30','Gio Alexandre','TE/LB','10')
buildVarsityRoster('31','Drew Fowler','RB/DB','12')
buildVarsityRoster('32','Elias Mayes','RB/DB','11')
buildVarsityRoster('33','Alijah Pavia','TE/LB','10')
buildVarsityRoster('35','Liam Timpone','WR/LB','10')
buildVarsityRoster('38','Jefferson Bleichwel','RB/LB','10')
buildVarsityRoster('40','Jack Consedine','OL/DL','10')
buildVarsityRoster('46','Nicholas De Souza','TE/LB','12')
buildVarsityRoster('50','Jayden Santos','OL/LB','10')
buildVarsityRoster('51','Junior De Los Santos','OL/LB','11')
buildVarsityRoster('54','Alexandre Guyonnet','OL/LB','12')
buildVarsityRoster('55','Lucas Tremblay','OL/LB','12')
buildVarsityRoster('57','Drew Sadoski','OL/LB','12')
buildVarsityRoster('58','Colin Burns','OL/DL','11')
buildVarsityRoster('59','Paul Belmonte','OL/DL','12')
buildVarsityRoster('60','Jackson Champlain','OL/DL','12')
buildVarsityRoster('61','Benjamin Hering','OL/LB','11')
buildVarsityRoster('62','Connor LoColle','OL/LB','11')
buildVarsityRoster('65','Anthony Dixon','OL/DL','12')
buildVarsityRoster('67','Noah McGoldrick','OL/DL','10')
buildVarsityRoster('68','Eric Barbeau','OL/DL','11')
buildVarsityRoster('70','Logan Gomes','OL/DL','10')
buildVarsityRoster('71','Rowan Morneau','OL/DL','12')
buildVarsityRoster('72','Connor Day','OL/DL','12')
buildVarsityRoster('74','Andrew Zavala','OL/DL','10')
buildVarsityRoster('75','Colby McLane','OL/DL','10')
buildVarsityRoster('77','Mark Lombard Iii','OL/DL','10')
buildVarsityRoster('79','Jacob Plakans','OL/LB','10')
buildVarsityRoster('81','Seamus Lordan','WR/DB','10')
buildVarsityRoster('82','Matteo Quattrocchi','WR/DB','12')
buildVarsityRoster('84','Angel Carnevale','WR/DB','10')
buildVarsityRoster('88','Scott Kwiatek','TE/LB','11')

