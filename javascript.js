// Button

let get_repos = document.querySelector(".get-repos")

// Div of Span-Shows

let show_data = document.querySelector(".show-data")

// span-Shows

let span_show = document.querySelector(".shows")

// Input 

let mainInput = document.querySelector(".usernameRep")
// Function On Click (Button)

get_repos.onclick = function () {


    if(mainInput.value.length <= 0) {
        show_data.innerHTML = "<span>Please Write Github Username</span>"
    }

    getRepo()

}


function getRepo () {
   


    if(mainInput.value.length == 0) {

        span_show.innerHTML = "<span>Please Write Github Username</span>"

    } else {
        
        fetch(`https://api.github.com/users/${mainInput.value}/repos`).then((repose) => repose.json()).then((repositers) => {

        show_data.innerHTML = "";

        if(!(repositers.length)) {
          
          return show_data.innerHTML = "<span>No Repos Found</span>"
         
        }
        

        repositers.forEach(repo => {
            
            // Create Main Div

            let mainDiv = document.createElement("div")

            mainDiv.className = "parent";

            //Append Main Div to Show-Data

            show_data.appendChild(mainDiv)

            // Create H3 TO APPEND INTO MainDiv

            let h3 = document.createElement("h3")

            // Create Text Node h3

            let textNode = document.createTextNode(repo.name)

            // Append Text Node To h3

            h3.appendChild(textNode) 

            // Append h3 to MainDiv

            mainDiv.appendChild(h3)


            // Create Content-Link-Div

            let contentLink = document.createElement("div")

            contentLink.className = "content-link"

            mainDiv.appendChild(contentLink)

            // Create link Vise and append it to Main Div

            let createLink = document.createElement("a")

            let textLink = document.createTextNode("Visit")

            createLink.href = `https://github.com/${mainInput.value}/${repo.name}`

            createLink.setAttribute("target" , "_blank")

            // Append textLink to Create Link

            createLink.appendChild(textLink)


            // Create Link for Stars repos

            let linkStar = document.createElement("a");

            let textStar = document.createTextNode(`Stars : ${repo.stargazers_count}`)

            //Append textStar to linkStar

            linkStar.appendChild(textStar)

            // Append LinkVist to Main Div
            
            contentLink.appendChild(createLink)

            // Append LinkStar to MainDiv

            contentLink.appendChild(linkStar)
            
        });

        })


    }
}