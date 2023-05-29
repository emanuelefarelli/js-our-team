const team = [
    {
        name: 'Wayne Barnett',     
        role: 'founder & CEO',      
        badge: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',     
        role: 'Chief Editor',      
        badge: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',     
        role: 'Office Manager',      
        badge: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',     
        role: 'Social Media Manager',      
        badge: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',     
        role: 'Developer',      
        badge: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',     
        role: 'Graphic Designer',      
        badge: 'barbara-ramos-graphic-designer.jpg',
    },

];

const myMain = document.querySelector('main');
let teamList = document.createElement('ul');


for(let i = 0 ; i < team.length ; i++){
    const teamMember = document.createElement('li');
    const name = team[i].name;
    const role = team[i].role;
    const badge = team[i].badge;
    teamMember.innerHTML = `
        <div>
            <img src="img/${badge}" alt="member-photo">
            <p>
                Nome: ${name}
            </p>
            <p>
                Ruolo: ${role}
            </p>
        </div>
    `;
    teamList.append(teamMember);
    console.log(`membro: ${i} nome: ${name} ruolo: ${role} img: ${badge}`);
}

myMain.append(teamList);