let braJson = '{"namn":"Anna","alder":25}'
let dagligJson = 'detta är inte json'

function parseUser (str) {
    try {
        return JSON.parse(str)
    } catch {
        return "ogiltig data"
    }
}

    console.log ("test 1:", parseUser(braJson))
    console.log ("test 2:", parseUser(dagligJson))



    let allaanvandare = [
        {id:1,namn:"bo"},
        {id :2,namn:"Sara"}
    ]

    const sokld = (id,lista) => {
        try {
              const hittad = lista.find((user) => {
                    return user.id === id
                })

                if (!hittad) {
                    throw new Error ("använader hittades inte")
                }
           
                return hittad.namn
           
        } catch (error) {
            return error.message
        }
    }

    console.log(sokld(1, allaanvandare))


    


