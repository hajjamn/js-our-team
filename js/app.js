/*
Utilizzando i dati forniti i tabella,
creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM semplicemente come stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

/*
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
*/

//Creo gli oggetti

const wayneBarnett = {
  "nome": `Wayne Barnett`,
  "ruolo" : `Founder & CEO`,
  "foto" : `wayne-barnett-founder-ceo.jpg`
};

const angelaCaroll = {
  "nome" : `Angela Caroll`,
  "ruolo" : `Chief Editor`,
  "foto" : `angela-caroll-chief-editor.jpg`
};

const walterGordon = {
  "nome" : `Walter Gordon`,
  "ruolo" : `Office Manager`,
  "foto" : `walter-gordon-office-manager.jpg`
};

const angelaLopez = {
  "nome" : `Angela Lopez`,
  "ruolo" : `Social Media Manager`,
  "foto" : `angela-lopez-social-media-manager.jpg`
};

const scottEstrada = {
  "nome" : `Scott Estrada`,
  "ruolo" : `Developer`,
  "foto" : `scott-estrada-developer.jpg`
};

const barbaraRamos = {
  "nome" : `Barbara Ramos`,
  "ruolo" : `Graphic Designer`,
  "foto" : `barbara-ramos-graphic-designer.jpg`
};

//Creo l'array di oggetti

const team = [wayneBarnett, angelaCaroll, walterGordon, angelaLopez, scottEstrada, barbaraRamos];

//Stampo in console le informazioni per ogni membro del team
  //Creo la funzione per stampare le informazioni

function printMemberInfo(member) {
  console.log(member.nome, member.ruolo, member.foto);
};

  //Invoco ciclicamente la funzione per ogni elemento dell'array
for (let i = 0; i < team.length; i++) {
  const currentMember = team[i];
  printMemberInfo(currentMember);
}

//Definisco l'elemento html dove inserire le stringhe di testo
const cardContainerElement = document.querySelector('.cards-row')

//Creo la funzione per aggiungere una stringa con le informazioni
function generateMemberCard(member) {
  const teamMemberCardElement = document.createElement('div');
  teamMemberCardElement.innerHTML = `
    <p>${member.nome}</p>
    <p>${member.ruolo}</p>
    <p>${member.foto}</p>
    `
  cardContainerElement.append(teamMemberCardElement)
}

  //Invoco ciclicamente la funzione per ogni elemento dell'array
  for (let i = 0; i < team.length; i++) {
    const currentMember = team[i];
    generateMemberCard(currentMember);
  }