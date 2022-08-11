type  Users = {
    name: string,
    email: string,
    role: string
}

const usuarios: Users[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function funcao5 (users: Users[]){
    const result: string[] = users.filter(user => user.role === 'admin').map(user => user.email)
    return result
}