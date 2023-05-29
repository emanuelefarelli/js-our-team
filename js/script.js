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


for(let i = 0 ; i < team.length ; i++){
    const name = team[i].name;
    const role = team[i].role;
    const badge = team[i].badge;
    console.log(`membro: ${i} nome: ${name} ruolo: ${role} img: ${badge}`);
}