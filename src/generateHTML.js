//function to generate HTML
function generateHTML(data){
    var html = ''
    data.forEach(element => {
        const {name, id, email, role, officeNumber, git, school} = element
        if (role === 'Engineer'){
            html += `<h1>${role}</h1>`
        }
        if (role === 'Intern'){
            html += `<h1>${role}</h1>`
            
        }
        if (role === 'Manager'){
            html += `<h1>${role}</h1>`
            
        }
        
    });

    console.log(html)
}

module.exports = generateHTML;