export const goToLogin = (history) => {
    history.pushState("/login")
}

export const goToSignUp = (history) => {
    history.pushState("/cadastro")
}

export const goToAddRecipes = (history) => {
    history.pushState("/adicionar-receita")
}

export const goToRecipeDetail = (history, id) => {
    history.pushState(`/detalhe/${id}`)
}

export const goToRecipesList = (history) => {
    history.pushState("/")
}